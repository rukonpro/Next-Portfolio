import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (password.length < 6) {
        return res.status(400).json({ error: 'Password should be at least 6 characters long' });
    }

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(409).json({ error: 'User with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'USER', // Explicitly set role, though it's the default
            },
        });

        // Don't send the password back in the response
        const { password: _, ...userWithoutPassword } = newUser;

        return res.status(201).json({ user: userWithoutPassword });

    } catch (error) {
        console.error('Signup API Error:', error);
        return res.status(500).json({ error: 'An internal server error occurred' });
    } finally {
        await prisma.$disconnect();
    }
}
