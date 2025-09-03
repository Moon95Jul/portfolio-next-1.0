"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // const move = (path: string) => router.push(path);
  function move(path: string) {
    router.push(path);
  }

  return (
    <div>
      <div>Home</div>
      <div className="p-8 space-y-4 text-black">
        <Button
          variant="outline"
          onClick={() => {
            move("/pages/login");
          }}
        >
          {" "}
          로그인으로 이동{" "}
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            move("/pages/register");
          }}
        >
          {" "}
          회원가입으로 이동{" "}
        </Button>
        <Button variant="link">
          {" "}
          <Link href={"/pages/login"}>Link로 로그인 페이지 이동</Link>{" "}
        </Button>
      </div>
    </div>
  );
}
