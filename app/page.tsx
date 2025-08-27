'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <div> Home </div>
      <div className="p-8 space-y-2">
        <div className="p-2 bg-red-200"
          onClick={() => router.push('/login')}
        > 로그인으로 이동 </div>

        <div className="p-2 bg-blue-200"
          onClick={() => router.push('/register')}
        > 회원가입으로 이동 </div>

        <Link href={"/login"}>
          <div className="p-2 bg-green-200"
          > Link로 로그인 페이지 이동 </div>
        </Link>
      </div>
    </div>
  )
}
