'use client'

import { SignOutButton } from '@clerk/nextjs'
import { useToast } from '../ui/use-toast'
import Link from 'next/link'

function SignOutLink() {
  const { toast } = useToast()
  const handleLogout = () => {
    toast({
      description: 'Vous êtes déconnecté·e',
    })
  }
  return (
    <SignOutButton>
      <Link href='/' className='w-full text-left' onClick={handleLogout}>
        Se déconnecter
      </Link>
    </SignOutButton>
  )
}

export default SignOutLink
