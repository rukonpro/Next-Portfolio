import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'PATCH') {
        const { id } = req.query; // Get ID from query parameters
        const updates = req.body; // Get update data from request body

        if (!id) {
            return res.status(400).json({ error: 'ID is required to update skill' });
        }

        try {
            const updatedSkill = await prisma.skill.update({
                where: { id },
                data: updates,
            });
            res.status(200).json(updatedSkill);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update skill' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
