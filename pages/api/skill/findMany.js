import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const skills = await prisma.skill.findMany();
            res.status(200).json(skills);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch skills' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
