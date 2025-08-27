"use client";

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
        <div
          className="p-2 bg-red-200 hover:bg-red-100"
          onClick={() => {
            move("/pages/login");
          }}
        >
          로그인으로 이동
        </div>
        <div
          className="p-2 bg-blue-200 hover:bg-blue-100"
          onClick={() => {
            move("/pages/register");
          }}
        >
          회원가입으로 이동
        </div>
        <Link href={"/pages/login"}>
          <div className="p-2 bg-purple-200 hover:bg-purple-100">
            Link로 로그인 페이지 이동
          </div>
        </Link>
      </div>
    </div>
  );
}
