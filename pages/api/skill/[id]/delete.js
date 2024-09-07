import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.query; // Get ID from query parameters

        if (!id) {
            return res.status(400).json({ error: 'ID is required to delete skill' });
        }

        try {
            await prisma.skill.delete({ where: { id } });
            res.status(204).end(); // No content
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete skill' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
