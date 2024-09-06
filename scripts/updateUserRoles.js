import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateUserRoles() {
    // সব ইউজার খুঁজে বের করুন যাদের role নেই
    const usersWithoutRole = await prisma.user.findMany({
        where: {
            role: null // যেসব ইউজারের role নেই
        }
    });

    // প্রতিটি ইউজারের জন্য role আপডেট করুন
    for (const user of usersWithoutRole) {
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                role: 'USER' // ডিফল্ট role
            }
        });
    }

    console.log('All users updated with role.');
}

updateUserRoles()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });