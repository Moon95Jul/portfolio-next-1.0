"use client";

import Api from "@/lib/api";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClientPage({ code }: { code: string }) {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const token = await Api().loginByKakao(code);
      console.log("token : " + token);

      // 1. token.sub 값 확인.
      // 우리는 서버한테 한번 더 물어보기. (토큰 해석 맡기기, 시크릿키 비교)
      const me = await Api().me(token);
      console.log("me :", me);

      // 1.1 있음 : 로그인
      if (me.email) {
        setCookie("Access-Token", token);
        router.push("/");
      } else {
        // 1.2 없음 : 회원가입
        router.replace(`/register?token=${token}`);
      }


      // try {
      //   const token = await Api().loginByKakao(code);
      //   console.log("카카오 로그인 성공:", token);
      // } catch (error) {
      //   console.error("카카오 로그인 실패:", error);
      // }
    })();
  }, [code]);

  return <div>카카오 로그인 중입니다...</div>;
}
