import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials) => {
                const user = await prisma.user.findUnique({ where: { email: credentials.email } });

                if (user && credentials.password && await bcrypt.compare(credentials.password, user.password)) {
                    return { id: user.id, email: user.email, name: user.name,role:user.role, createdAt: user.createdAt };
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            session.user = token;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.role = user.role;
                token.createdAt = user.createdAt;


            }
            return token;
        }
    }
}
export default NextAuth(authOptions);
