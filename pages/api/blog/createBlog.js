import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data'; // Import FormData from form-data package

const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false, // Disable Next.js body parsing for file uploads
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const form = formidable({
            keepExtensions: true,
        });

        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to process the form' });
            }

            const title = fields.title?.[0] || fields.title;
            const content = fields.content?.[0] || fields.content;

            let thumbnail = null;
            if (files.thumbnail) {
                const file = files.thumbnail[0] || files.thumbnail;
                const imagePath = file.filepath;

                try {
                    // Create form-data object
                    const formData = new FormData();
                    formData.append('image', fs.createReadStream(imagePath));

                    // Upload to ImageBB
                    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.IMAGEBB_API_KEY}`, formData, {
                        headers: {
                            ...formData.getHeaders(),
                        }
                    });

                    thumbnail = response.data.data.url; // ImageBB URL

                } catch (error) {
                    console.error('Error uploading file to ImageBB:', error.response?.data || error.message);
                    return res.status(500).json({ error: 'Failed to upload file to ImageBB' });
                }
            }
            try {
                const blog = await prisma.blog.create({
                    data: {
                        title,
                        content,
                        thumbnail
                    },
                });
                res.status(201).json({ message: 'Blog saved successfully!', blog });
            } catch (error) {
                console.error('Error saving blog to the database:', error);
                res.status(500).json({ error: 'Failed to save the blog' });
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
