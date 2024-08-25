import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const blog = await prisma.blog.findUnique({
                where: {
                    id: id,  // or use { slug: id } if using a slug
                },
            });

            if (!blog) {
                return res.status(404).json({ error: 'Blog not found' });
            }

            res.status(200).json(blog);
        } catch (error) {
            console.error('Error fetching blog:', error);
            res.status(500).json({ error: 'Failed to fetch the blog' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
