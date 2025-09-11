"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import sample01 from "@/public/images/sample01.png";

export default function NextImagePage() {
  const propsData = [
    { name: "src/alt", info: "필수. 접근성 고려한 대체텍스트 작성" },
    {
      name: "width/height",
      info: "픽셀 단위 고정 렌더일 때 필수(정적 import는 자동)",
    },
    {
      name: "fill",
      info: '부모 요소를 채움(반응형 카드/배너). className="object-cover"와 반드시 sizes 동반',
    },
    {
      name: "sizes",
      info: "응답 이미지의 의도된 렌더 폭 힌트. 네트워크 낭비 방지의 핵심",
    },
    {
      name: "priority",
      info: "LCP 후보(Above-the-fold)에는 우선 로드(프리로드)",
    },
    {
      name: 'placeholder="blur"/blurDataURL',
      info: "초저해상도 프리뷰. 원격 이미지는 수동 제공",
    },
    { name: "quality", info: "1–100, 기본 75. 과한 상향은 용량 증가" },
    { name: "loading", info: "기본 lazy(priority 시 무시)" },
    { name: "unoptimized", info: "최적화 비활성(GIF/아이콘/자체 CDN 사용 시)" },
    { name: "decoding", info: "async|auto|sync 힌트" },
    {
      name: "overrideSrc",
      info: "생성되는 최종 src를 덮어씀(특수 SEO/마이그레이션 용)",
    },
  ];

  return (
    <div className="p-20 space-y-20">
      <div className="space-y-8">
        <div className="text-3xl font-bold"> next/Image Component </div>

        <div className="text-xl"> 개요 </div>

        <div>
          {[
            "자동 사이즈 최적화(디바이스별 적절한 srcset, WebP 등 최신 포멧)",
            "시각 안정성(너비,높이/비율로 CLS 방지",
            "원격 자산 최적화(S3 등 외부 이미지도 리사이즈/변환",
            "핵심 : 성능, 품질, 접근성, 보안을 한 번에 챙김",
          ].map((ele, i) => (
            <div key={i} className="">
              {" "}
              - {ele}{" "}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-xl"> 핵심 Props </div>
          {propsData.map((propsInfo, i) => (
            <div key={i} className="flex pl-2">
              <div className="font-semibold">- {propsInfo.name}</div>
              <div> : {propsInfo.info}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-xl"> 자주 쓰는 패턴 </div>
          <div>
            <div>
              <div> 1. 배너(Hero) 이미지 </div>
              {/* <Image
                src={sample01}
                alt="배너 미리보기"
                priority
                placeholder="blur"
                sizes="(max-width:768px), 100vw, (max-width:1200px) 50vw, 1200px"
                className="w-full h-auto"
                fill
              ></Image> */}
              <div>
                <div> 2. 비율로 고정 </div>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={sample01}
                    alt="배너 미리보기"
                    priority
                    placeholder="blur"
                    sizes="(max-width:768px), 100vw, (max-width:1200px) 50vw, 1200px"
                    className="w-full h-auto"
                    fill
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div> 참고 </div>
          <Button
            variant="link"
            onClick={() =>
              window.open(
                "https://nextjs.org/docs/pages/api-reference/components/image"
              )
            }
          >
            Next Image
          </Button>
          <Button
            variant="link"
            onClick={() =>
              window.open(
                "https://nextjs.org/docs/pages/getting-started/images"
              )
            }
          >
            Image Optimization
          </Button>
        </div>
      </div>
    </div>
  );
}
