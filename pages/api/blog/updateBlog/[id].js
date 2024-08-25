import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'PATCH') {
        const { title, content, thumbnail } = req.body;

        try {
            const updatedData = {};

            if (title !== undefined) updatedData.title = title;
            if (content !== undefined) updatedData.content = content;
            if (thumbnail !== undefined) updatedData.thumbnail = thumbnail;

            const blog = await prisma.blog.update({
                where: { id: Number(id) }, // Use { slug: id } if using a slug
                data: updatedData,
            });

            if (!blog) {
                return res.status(404).json({ error: 'Blog not found' });
            }

            res.status(200).json({ message: 'Blog updated successfully', blog });
        } catch (error) {
            console.error('Error updating blog:', error);
            res.status(500).json({ error: 'Failed to update the blog' });
        }
    } else {
        res.setHeader('Allow', ['PATCH']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
