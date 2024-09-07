import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const project = await prisma.project.findUnique({ where: { id } });

            if (project) {
                return res.status(200).json(project);
            } else {
                return res.status(404).json({ error: 'Project not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Error fetching project' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
