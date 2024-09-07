// app/api/services/createService.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
console.log(req.body)
    const { name, desc, price, isMostPop, features } = req.body;

    try {
        const newService = await prisma.service.create({
            data: {
                name,
                desc,
                price,
                isMostPop,
                features,
            },
        });
        res.status(201).json({ message: 'Service created successfully', newService });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create service' });
    }
}
