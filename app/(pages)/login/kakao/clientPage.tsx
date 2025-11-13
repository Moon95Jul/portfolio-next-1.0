"use client";

import Api from "@/lib/api";
import { useEffect } from "react";

export default function ClientPage({ code }: { code: string }) {
  useEffect(() => {
    (async () => {
      try {
        const token = await Api().loginByKakao(code);
        console.log("카카오 로그인 성공:", token);
      } catch (error) {
        console.error("카카오 로그인 실패:", error);
      }
    })();
  }, [code]);

  return <div>카카오 로그인 중입니다...</div>;
}
