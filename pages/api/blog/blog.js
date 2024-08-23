import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import path from 'path';

const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false, // Disable Next.js body parsing for file uploads
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const form = formidable({
            uploadDir: "./public/uploads", // Save uploads in public/uploads folder
            keepExtensions: true
        });

        form.parse(req, async (err, fields, files) => {

            if (err) {
                return res.status(500).json({ error: 'Failed to process the form' });
            }

            const title=fields?.title[0];
            const content=fields?.content[0]
            
            const thumbnail = files.thumbnail[0] ? `/uploads/${path.basename(files.thumbnail[0].filepath)}` : null;

            console.log("data check rukon--->",title, content, thumbnail)

            try {
                const blog = await prisma.blog.create({
                    data: {
                        title,
                        content,
                        thumbnail
                    },
                });
                res.status(201).json({ message: 'blog saved successfully!', blog });
            } catch (error) {
                res.status(500).json({ error: 'Failed to save the blog' });
            }
        });
    } else if (req.method === 'GET') {
        try {
            const blogs = await prisma.blog.findMany();
            res.status(200).json(blogs);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch blogs' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
