'use client'

import AppShell from "@/components/grid/appShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function LoginEmailPage() {
    const router = useRouter()

    return (
        <AppShell>
            <div className="space-y-12">
                <div className="text-2xl font-bold"> 이메일로 로그인 </div>
                <div>
                    <div> 이메일 </div>
                    <Input></Input>
                </div>
                <div>
                    <div> 비밀번호 </div>
                    <Input></Input>
                </div>



                <div>
                    <div> 아직 계정이 없으신가요? </div>
                    <Button variant='link' onClick={() => router.push('/register')}> 회원가입 </Button>
                </div>
            </div>
        </AppShell>
    )
}