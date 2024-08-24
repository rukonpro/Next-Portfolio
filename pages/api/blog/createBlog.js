import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import fs from 'fs';
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
            keepExtensions: true,
        });

        form.on('file', (formName, file) => {
            const uploadDir = path.join(process.cwd(), 'public/uploads');
            const filePath = path.join(uploadDir, file.originalFilename);

            // Create directory if it doesn't exist
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const readStream = fs.createReadStream(file.filepath);
            const writeStream = fs.createWriteStream(filePath);

            readStream.pipe(writeStream);

            file.newFilepath = `/uploads/${path.basename(filePath)}`;
        });

        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to process the form' });
            }

            const title = fields?.title?.[0] || "";
            const content = fields?.content?.[0] || "";
            const thumbnail = files.thumbnail?.[0]?.newFilepath || null;


            try {
                const blog = await prisma.blog.create({
                    data: {
                        title,
                        content,
                        thumbnail,
                    },
                });
                res.status(201).json({ message: 'Blog saved successfully!', blog });
            } catch (error) {
                res.status(500).json({ error: 'Failed to save the blog' });
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
