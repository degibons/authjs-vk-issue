import { auth } from './auth'
import SignInButton from './SignInButton'
import UserAvatar from './UserAvatar'

export default async function Home() {
  const session = await auth()

  return session ? <UserAvatar /> : <SignInButton />
}
