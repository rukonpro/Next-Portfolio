import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export default async function handler(req, res) {
    if (req.method === 'GET') {

        const { fields } = req.query; // প্রপার্টি গুলো সিলেক্ট করতে চাই
        let selectFields = {};
        console.log(selectFields)
        if (fields) {
            const fieldArray = fields.split(',');
            fieldArray.forEach(field => {
                selectFields[field] = true; // সিলেক্টেড ফিল্ড গুলো কাস্টমাইজ করে সিলেক্ট করুন
            });
        }

        try {
            const blogs = await prisma.blog.findMany({
                select: selectFields,

            });
            res.status(200).json(blogs);
        } catch (error) {
            console.error('Error fetching blogs from Prisma:', error); // Add more specific logging
            res.status(500).json({ error: 'Failed to fetch blogs' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}