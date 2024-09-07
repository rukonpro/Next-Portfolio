import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description, logo, color, link, proficiencyLevel } = req.body;

        if (!title || !description || !logo || !color || !link || !proficiencyLevel) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        try {
            const newSkill = await prisma.skill.create({
                data: {
                    title,
                    description,
                    logo,
                    color,
                    link,
                    proficiencyLevel
                },
            });
            res.status(201).json(newSkill);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create skill' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
