import { PrismaClient } from '@prisma/client';
import formidable from 'formidable'; // Import formidable
import fs from 'fs'; // Import fs
import axios from 'axios'; // Import axios
import FormData from 'form-data'; // Import FormData
import { getServerSession } from 'next-auth/next'; // Import getServerSession
import { authOptions } from '../../auth/[...nextauth]'; // Import authOptions (note the path change)

const prisma = new PrismaClient();

// Disable Next.js body parsing for file uploads
export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'PATCH') {
        try { // Wrap the entire PATCH logic in a try-catch
            const session = await getServerSession(req, res, authOptions);

            if (!session || session.user.role !== 'ADMIN') {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            if (!id) {
                return res.status(400).json({ error: 'Blog ID is required.' });
            }

            // Wrap form.parse in a Promise
            await new Promise((resolve, reject) => {
                const form = formidable({
                    keepExtensions: true,
                });

                form.parse(req, async (err, fields, files) => {
                    if (err) {
                        res.status(500).json({ error: 'Failed to process the form', details: err.message });
                        return reject(err); // Reject the promise on error
                    }

                    const title = fields.title?.[0] || fields.title;
                    const content = fields.content?.[0] || fields.content;
                    const existingThumbnailUrl = fields.existingThumbnail?.[0] || fields.existingThumbnail;


                    let thumbnail = existingThumbnailUrl || null;

                    if (files.thumbnail) {
                        const file = files.thumbnail[0] || files.thumbnail;
                        const imagePath = file.filepath;

                        try {
                            const formData = new FormData();
                            formData.append('image', fs.createReadStream(imagePath));

                            const response = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.IMAGEBB_API_KEY}`, formData, {
                                headers: {
                                    ...formData.getHeaders(),
                                }
                            });

                            thumbnail = response.data.data.url;
                            console.log('  New Thumbnail URL after ImageBB:', thumbnail);
                        } catch (error) {
                            res.status(500).json({ error: 'Failed to upload new thumbnail to ImageBB' });
                            return reject(error); // Reject the promise on error
                        }
                    } else {
                        console.log('  No new thumbnail file provided. Using existing/null:', thumbnail);
                    }

                    try {
                        const updatedData = {};
                        if (title !== undefined) updatedData.title = title;
                        if (content !== undefined) updatedData.content = content;
                        if (thumbnail !== undefined) updatedData.thumbnail = thumbnail;


                        const blog = await prisma.blog.update({
                            where: { id: id },
                            data: updatedData,
                        });

                        if (!blog) {
                            res.status(404).json({ error: 'Blog not found' });
                            return resolve(); // Resolve after sending response
                        }

                        res.status(200).json({ message: 'Blog updated successfully', blog });
                        resolve(); // Resolve after sending response
                    } catch (error) {
                        res.status(500).json({ error: 'Failed to update the blog', details: error.message });
                        reject(error); // Reject the promise on error
                    }
                });
            });
        } catch (outerError) { // Catch errors from getServerSession or formidable init
            return res.status(500).json({ error: 'Internal Server Error', details: outerError.message });
        }
    } else {
        res.setHeader('Allow', ['PATCH']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
