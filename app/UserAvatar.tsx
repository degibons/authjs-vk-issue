'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { signOut } from './signout'

export default function UserAvatar() {
  const { data } = useSession()
  const user = data ? data.user : null

  return (
    <div className="flex gap-6 items-center">
      <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-gray-100 bg-gray-50">
        {user?.image ? (
          <Image src={user.image} alt="" width={40} height={40} unoptimized />
        ) : (
          <svg
            className="text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </div>
      <button
        onClick={async () => {
          await signOut()
          window.location.href = '/'
        }}
        className="border border-gray-400 rounded-lg p-6 py-2"
      >
        SignOut
      </button>
    </div>
  )
}
