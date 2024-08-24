import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid'; // Import UUID package

const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false, // Disable Next.js body parsing for file uploads
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const uploadDir = path.join(process.cwd(), 'public/uploads');

        // Ensure the upload directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const form = formidable({
            keepExtensions: true,
            fileWriteStreamHandler: (file) => {
                // Generate a unique filename using UUID and preserve the extension
                const extension = path.extname(file.originalFilename);
                const uniqueFilename = `${uuidv4()}${extension}`;
                const filePath = path.join(uploadDir, uniqueFilename);

                // Attach the new filename to the file object for later use
                file.newFilename = uniqueFilename;

                return fs.createWriteStream(filePath);
            }
        });

        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error parsing the form:', err);
                return res.status(500).json({ error: 'Failed to process the form' });
            }

            const title = fields.title?.[0] || fields.title;
            const content = fields.content?.[0] || fields.content;

            let thumbnail = null;
            if (files.thumbnail) {
                const file = files.thumbnail[0] || files.thumbnail;
                thumbnail = `/uploads/${file.newFilename}`;
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

