import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query; // Extract the blog id from the query parameters

    if (req.method === 'DELETE') {
        try {
            const blog = await prisma.blog.delete({
                where: { id: Number(id) }, // Use { slug: id } if using a slug
            });

            if (!blog) {
                return res.status(404).json({ error: 'Blog not found' });
            }

            res.status(200).json({ message: 'Blog deleted successfully', blog });
        } catch (error) {
            console.error('Error deleting blog:', error);
            res.status(500).json({ error: 'Failed to delete the blog' });
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
