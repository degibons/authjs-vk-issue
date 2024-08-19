import NextAuth, { CredentialsSignin, type Session, type User } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/app/prisma'
import Vk from 'next-auth/providers/vk'

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Vk({
      clientId: process.env.AUTH_VK_ID,
      clientSecret: process.env.AUTH_VK_SECRET
    })
  ],
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  trustHost: true
})
