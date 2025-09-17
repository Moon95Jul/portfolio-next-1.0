'use client'

import { LogIn } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()

    return (
        <header className="flex justify-center h-[64px]">
            <div className="w-full max-w-[1280px] flex justify-between items-center">
                <div className="font-bold" onClick={() => router.push('/')}> Logo </div>
                <div className="flex space-x-4">
                    <Button variant='ghost'> ABOUT </Button>
                    <Button variant='ghost'> HISTORY </Button>
                    <Button variant='ghost'> PROJECT </Button>
                    <Button variant='ghost'> ALGORITHM </Button>
                    <Button variant='secondary' className="rounded-full" 
                        onClick={() => {
                            router.push('/til')
                        }}
                    >
                    <div className="font-bold" > Today I Learned </div>
                    </Button>
                </div>
                <div>
                    <Button variant='ghost' onClick={() => router.push('/login')}>
                        <LogIn></LogIn>
                        로그인
                    </Button>
                </div>
            </div>
      </header>
    )
}