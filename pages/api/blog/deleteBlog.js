import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next'; // Import getServerSession
import { authOptions } from '../auth/[...nextauth]'; // Import authOptions

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query; // Extract the blog id from the query parameters

    if (req.method === 'DELETE') {
        const session = await getServerSession(req, res, authOptions); // Get session

        if (!session || session.user.role !== 'ADMIN') { // Check admin role
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // No need for isNaN(Number(id)) check as id is a string (MongoDB ObjectId)
        if (!id) {
            return res.status(400).json({ error: 'Blog ID is required.' });
        }

        try {
            const blog = await prisma.blog.delete({
                where: { id: id }, // Use id directly as it's a string
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
