import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const blogs = await prisma.blog.findMany();
            res.status(200).json(blogs);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch blogs' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}