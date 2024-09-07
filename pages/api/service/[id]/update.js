// app/api/services/[id]/updateService.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'PATCH') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { id } = req.query;
    const { name, desc, price, isMostPop, features } = req.body;

    try {
        const updatedService = await prisma.service.update({
            where: { id },
            data: {
                name,
                desc,
                price,
                isMostPop,
                features,
            },
        });

        res.status(200).json({ message: 'Service updated successfully', updatedService });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update service' });
    }
}
