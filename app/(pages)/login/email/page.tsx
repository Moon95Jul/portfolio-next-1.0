"use client";

import AppShell from "@/components/grid/appShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginEmailPage() {
  const router = useRouter();
  const api = Api();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    try {
      const receivedToken = await api.loginByEmail(email, password);
      setToken(receivedToken);
      localStorage.setItem("token", receivedToken);
    } catch (error) {
      console.error("로그인 실패:", error);
      toast.error("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  return (
    <AppShell>
      <div className="space-y-12">
        <div className="text-2xl font-bold"> 이메일로 로그인 </div>
        <div>
          <div> 이메일 </div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </div>
        <div>
          <div> 비밀번호 </div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        <Button onClick={handleLogin}> 로그인 </Button>

        <div className="max-w-full">
          <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm p-3 rounded-md border border-gray-200/30 dark:border-gray-700/30 break-words">
            토큰 값 : {token}
          </div>
        </div>

        <div>
          <div> 아직 계정이 없으신가요? </div>
          <Button variant="link" onClick={() => router.push("/register")}>
            {" "}
            회원가입{" "}
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
