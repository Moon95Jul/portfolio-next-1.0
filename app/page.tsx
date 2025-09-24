"use client";

import TranslateScroll from "@/components/scroll/translateScroll";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Grab, Grip, LogIn } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();

  const translateRef = useRef<HTMLDivElement>(null);
  const [offset, setoffset] = useState(0);
  const movingX = 500;

  const projects = [
    {
      title: "고양이 밥주기",
      info: "자동으로 고양이 밥 주는 IOT",
      color: "bg-red-100",
    },
    {
      title: "맛집 추천 어플",
      info: "우리동네 맛집을 알려주는 서비스",
      color: "bg-blue-100",
    },
    {
      title: "RPG 게임",
      info: "최고로 재미있는 RPG 게임",
      color: "bg-green-100",
    },
  ];

  const disabledNext = useMemo(() => {
    if (!translateRef.current) {
      return false;
    }

    return translateRef.current?.scrollWidth + offset - movingX <= 0;
  }, [offset]);

  const move = (dir: "prev" | "next") => {
    if (!translateRef.current) {
      return 0;
    }

    if (
      dir === "next" &&
      translateRef.current.scrollWidth + offset - movingX <= 0
    ) {
      return;
    }

    const delta = dir === "prev" ? 1 : -1;
    setoffset(offset + delta * movingX);
  };

  return (
    <div className="">
      <header className=" flex justify-center h-[64px]">
        <div className="w-full max-w-[1280px] flex justify-between items-center">
          <div className="font-bold">Logo</div>
          <div className="flex space-x-4">
            <Button variant="ghost"> ABOUT </Button>
            <Button variant="ghost"> HISTORY </Button>
            <Button variant="ghost"> PROJECT </Button>
            <Button variant="ghost"> ALGORITHM </Button>
            <Button variant="secondary" className="rounded-full">
              <div
                className="font-bold"
                onClick={() => {
                  router.push("/til");
                }}
              >
                {" "}
                Today I Learned{" "}
              </div>
            </Button>
          </div>
          <div>
            {/* <LogIn></LogIn> */}
            <Grip></Grip>
          </div>
        </div>
      </header>

      <div>
        {/* <section className="w-full flex justify-center bg-slate-100 h-[720px]">
          <div className="w-full max-w-[1280px] bg-red-200 space-y-10 flex items-end">
            <div className="w-80 text-4xl font-semibold bg-blue-200 break-keep py-10">
              작은 기술이라도 선하게 쓰이면 세상이 달라진다는 믿음,
              카카오임팩트가 존재하는 이유입니다.
            </div>
            <div className="flex-auto"></div>
            <div className="w-200 h-full bg-amber-300">이미지 예시</div>
          </div>
        </section> */}

        <section className="w-full flex justify-center bg-slate-200 h-[720px]">
          <div className="w-full max-w-[1280px] relative">
            <div className="w-80 text-4xl font-semibold break-keep py-10 absolute bottom-[8px] z-10">
              작은 기술이라도 선하게 쓰이면 세상이 달라진다는 믿음,
              카카오임팩트가 존재하는 이유입니다.
            </div>
            {/* <Image
              src={"/images/sample01.png"}
              alt={"sample01"}
              width={500}
              height={500}
            ></Image> */}
            <div className="absolute right-0">
              <div className="relative w-[800px] h-[720px]">
                <Image
                  src={"/images/sample01.png"}
                  alt={"sample01"}
                  fill
                  className="object-cover object-center"
                ></Image>
              </div>
            </div>

            {/* <div className="absolute w-full h-full">
              <video
                className="h-[720px]"
                autoPlay
                loop
                muted
                src="https://t1.daumcdn.net/impact/Editor/20250822/20250822104919/13fde1b056f342eba0058f91318156db"
              ></video>
            </div> */}
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[1280px] space-y-4">
            <div className="flex space-x-2">
              <div className="text-2xl font-bold">
                {" "}
                더 나은 미래를 만드는 나의 기술 이야기
              </div>
              <div className="flex-auto"></div>
              <Button
                size="icon"
                disabled={offset >= 0}
                onClick={() => move("prev")}
              >
                <ChevronLeft></ChevronLeft>
              </Button>
              <Button
                size="icon"
                disabled={disabledNext}
                onClick={() => move("next")}
              >
                <ChevronRight />
              </Button>
            </div>
            <TranslateScroll items={projects}></TranslateScroll>
          </div>
        </section>
      </div>
    </div>
  );
}
