import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'DELETE') {
        try {
            await prisma.project.delete({ where: { id } });
            return res.status(200).json({ message: 'Project deleted' });
        } catch (error) {
            return res.status(500).json({ error: 'Error deleting project' });
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
