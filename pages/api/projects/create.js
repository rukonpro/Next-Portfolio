import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        try {
            const project = await prisma.project.create({
                data: {
                    title: data.title,
                    logo: data.logo,
                    description: data.description,
                    images: data.images,
                    technology: data.technology,
                    point: data.point,
                    links: data.links,
                },
            });

            return res.status(201).json(project);
        } catch (error) {
            return res.status(500).json({ error: 'Error creating project' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
