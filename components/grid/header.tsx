"use client";

import { LogIn, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookie, deleteCookie } from "cookies-next";
import { toast } from "sonner";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = getCookie("Access-Token");
    if (accessToken) {
      setIsLogin(true);
    }
  }, []);

  const logout = () => {
    // 로그아웃
    // 1. acessToken 키로된 쿠키 지운다.
    deleteCookie("Access-Token");
    // 2. setIsLogin(false)
    setIsLogin(false);
  };

  const goToProject = () => {
    const accessToken = getCookie("Access-Token");
    if (accessToken) {
      router.push("/project");
    } else {
      toast.error("로그인이 필요합니다.");
      router.push("/login");
    }
  };

  return (
    <header className="flex justify-center h-[64px]">
      <div className="w-full max-w-[1280px] flex justify-between items-center">
        <div className="font-bold" onClick={() => router.push("/")}>
          {" "}
          Logo{" "}
        </div>
        <div className="flex space-x-4">
          <Link href="/about">
            {" "}
            <Button variant="ghost"> ABOUT </Button>{" "}
          </Link>
          <Link href="/history">
            <Button variant="ghost"> HISTORY </Button>
          </Link>

          <Button variant="ghost" onClick={goToProject}>
            {" "}
            PROJECT{" "}
          </Button>
          <Button variant="ghost"> ALGORITHM </Button>
          <Button
            variant="secondary"
            className="rounded-full"
            onClick={() => {
              router.push("/til");
            }}
          >
            <div className="font-bold"> Today I Learned </div>
          </Button>
        </div>
        <div>
          {isLogin ? (
            <Button variant="ghost" onClick={logout}>
              <LogOut></LogOut>
              로그아웃
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => router.push("/login")}>
              <LogIn></LogIn>
              로그인
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
