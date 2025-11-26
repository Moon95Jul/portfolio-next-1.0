"use client";

import AppShell from "@/components/grid/appShell";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { toast } from "sonner";

export default function AboutPage() {
  const visionItems: LiItemType[] = [
    {
      title: "문제 해결 중심",
      info: '"어떻게 구현할까?"보다 "무엇을 해결할까?"에 집중합니다.',
    },
    {
      title: "최신 기술 습득",
      info: "끊임없이 변화하는 기술 트렌드를 따라가며 최신 기술을 습득합니다.",
    },
    {
      title: "협업과 소통",
      info: "팀원들과의 원활한 소통과 협업을 통해 더 나은 결과물을 만들어냅니다.",
    },
    {
      title: "문제 해결 능력",
      info: "복잡한 문제를 분석하고 효과적인 해결책을 제시하는 능력을 갖추고 있습니다.",
    },
    {
      title: "지속적인 성장",
      info: "자기 개발과 학습을 통해 지속적으로 성장하고 발전하는 것을 목표로 합니다.",
    },
  ];

  const visionItemDetails: VisionItemType[] = [
    { title: "웹 개발", subTitle: "Next, Spring", className: "bg-red-100" },
    {
      title: "모바일 개발",
      subTitle: "React Native, Swift",
      className: "bg-sky-700 text-white",
    },
    { title: "클라우드", subTitle: "AWS, GCP", className: "bg-indigo-100" },
    {
      title: "DevOps",
      subTitle: "Docker, Kubernetes",
      className: "bg-green-100",
    },
  ];

  return (
    <AppShell>
      <div className="px-4 py-16">
        <Title title="소개" subTitle="INTRODUCE"></Title>
        <div className="mt-6 grid grid-cols-[3fr_1fr] gap-12 items-center">
          <div>
            <div className="text-2xl font-bold">발전하는 개발자</div>
            <div className="mt-4 space-y-3">
              <p>
                안녕하세요! 저는 끊임없이 성장하고 발전하는 개발자입니다. 새로운
                기술과 도구를 배우는 것을 즐기며, 문제 해결에 대한 열정을 가지고
                있습니다. 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게
                생각합니다.
              </p>
              <p>
                저는 다양한 프로젝트 경험을 통해 실무 능력을 키워왔으며, 항상
                최신 기술 동향을 주시하고 있습니다. 팀원들과의 원활한
                커뮤니케이션을 통해 프로젝트의 성공을 이끌어내고자 노력합니다.
              </p>
              <p>
                기술 트렌드를 따라가며 자신의 역량을 확장하고자 노력하고
                있습니다 .저는 도전을 두려워하지 않으며, 새로운 환경에서도
                빠르게 적응할 수 있는 유연성을 가지고 있습니다. 앞으로도
                계속해서 발전하는 개발자가 되기 위해 최선을 다하겠습니다.
              </p>
            </div>
          </div>
          <div className="">
            <div className="relative w-full aspect-2/3 overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/catImg1.jpg"
                alt="고양이"
                fill
                className="object-cover"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <section className="px-4 py-16">
        <div className="flex">
          <Title title="비전" subTitle="VISION"></Title>
        </div>

        <div className="py-12">
          <UlItem items={visionItems}></UlItem>
        </div>

        <div className="flex pt-6 space-x-12 justify-center">
          <VisionItems
            items={visionItemDetails}
            colors={[
              "bg-red-100",
              "bg-sky-100 text-black",
              "bg-blue-100",
              "bg-black text-white",
              "bg-green-100",
            ]}
          ></VisionItems>
        </div>
      </section>

      <section className="px-4 py-16">
        <Title title="연락처" subTitle="CONTACT"></Title>
        <div className="grid grid-cols-3 gap-4">
          <ContactCard name="Email" link="test@testLorem.com" />
          <ContactCard name="Github" link="https://github.com/test" />
          <ContactCard name="Instagram" link="https://instagram.com/" />
        </div>
      </section>
    </AppShell>
  );
}

function ContactCard({ name, link }: { name: string; link: string }) {
  return (
    <div className="p-6">
      <div className=" flex py-8 border rounded-lg items-center justify-center shadow-md">
        <div className="text-center space-y-2 text-xl">
          <div className="font-semibold tracking-wider">{name}</div>
          <Button
            onClick={async () => {
              if (link.startsWith("https") || link.startsWith("http")) {
                window.open(link);
              } else {
                try {
                  await window.navigator.clipboard.writeText(link);
                  toast.success("이메일 주소가 복사되었습니다.");
                } catch (error) {
                  console.error("Failed to copy text: ", error);
                  toast.error("복사에 실패했습니다. 다시 시도해주세요.");
                }
              }
            }}
          >
            {link}
          </Button>
          {/* <a href={link}>
            {link.startsWith("https") ? link : `mailto:${link}`}
          </a> */}
        </div>
      </div>
    </div>
  );
}

type LiItemType = { title: string; info: string };

function UlItem({ items }: { items: LiItemType[] }) {
  return (
    <ul className="space-y-2 list-disc pl-5">
      {items.map((item, index) => (
        <LiItem key={index} title={item.title} info={item.info} />
      ))}
    </ul>
  );
}

function LiItem({ title, info }: LiItemType) {
  return (
    <li>
      <span className="font-semibold pr-2"> {title} </span>
      <span>{info}</span>
    </li>
  );
}

type VisionItemType = {
  title: string;
  subTitle: string;
  className?: string;
};

function VisionItems({
  items,
  colors,
}: {
  items: VisionItemType[];
  colors?: string[];
}) {
  return (
    <div className="flex pt-6 space-x-12 justify-center">
      {items.map((item, index) => (
        <VisionItem
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          className={cn(item.className, colors?.[index])}
        />
      ))}
    </div>
  );
}

function VisionItem({ title, subTitle, className }: VisionItemType) {
  return (
    <div
      className={cn(
        "size-50 bg-sky-50 rounded-full flex items-center justify-center",
        className
      )}
    >
      <div className="text-center space-y-2">
        <div className="text-2xl font-bold"> {title} </div>
        <div> {subTitle} </div>
      </div>
    </div>
  );
}
