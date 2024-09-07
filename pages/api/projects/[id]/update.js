import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;
    const data = req.body;

    if (req.method === 'PATCH') {
        try {
            const updatedProject = await prisma.project.update({
                where: { id },
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

            return res.status(200).json(updatedProject);
        } catch (error) {
            return res.status(500).json({ error: 'Error updating project' });
        }
    } else {
        res.setHeader('Allow', ['PATCH']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
