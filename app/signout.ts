'use server'

import { signOut as logout } from '@/app/auth'

export async function signOut(): Promise<string> {
  return (await logout<false>({
    redirect: false
  })) as string
}
