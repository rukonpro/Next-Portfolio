import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function promoteUserToAdmin(email) {
    if (!email) {
        console.error('Error: Please provide an email address as an argument.');
        console.log('Usage: node scripts/promoteAdmin.js <user-email>');
        process.exit(1);
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            console.error(`Error: User with email "${email}" not found.`);
            process.exit(1);
        }

        if (user.role === 'ADMIN') {
            console.log(`User "${email}" is already an ADMIN.`);
            return;
        }

        await prisma.user.update({
            where: { email },
            data: { role: 'ADMIN' },
        });

        console.log(`Successfully promoted user "${email}" to ADMIN.`);

    } catch (error) {
        console.error('An error occurred while promoting the user:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

// Get the email from command-line arguments
const userEmail = process.argv[2];
promoteUserToAdmin(userEmail);
