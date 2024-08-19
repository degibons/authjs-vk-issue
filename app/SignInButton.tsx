import { signIn } from './auth'

export default function SignInButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('vk')
      }}
    >
      <button
        type="submit"
        className="border border-gray-400 rounded-lg p-6 py-2"
      >
        SignIn
      </button>
    </form>
  )
}
