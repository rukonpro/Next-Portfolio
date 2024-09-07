// app/api/services/getServices.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const services = await prisma.service.findMany();
        res.status(200).json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve services' });
    }
}
