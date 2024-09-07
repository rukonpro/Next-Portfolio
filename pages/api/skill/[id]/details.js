import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { id } = req.query; // Get ID from query parameters

        if (!id) {
            return res.status(400).json({ error: 'ID is required to fetch skill' });
        }

        try {
            const skill = await prisma.skill.findUnique({ where: { id } });
            if (!skill) {
                return res.status(404).json({ error: 'Skill not found' });
            }
            res.status(200).json(skill);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch skill' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
