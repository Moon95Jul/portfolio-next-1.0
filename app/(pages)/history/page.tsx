"use client";

import AppShell from "@/components/grid/appShell";
import Title from "@/components/title";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

// timelines: TimelineItem [] 3개 이상
// 타임라인 UI 구성
// (선택)shadcn card 컴포넌트 응용

const timelines: TimelineItem[] = [
  {
    period: "2014.02",
    title: "xx고등학교",
    description: "졸업",
  },
  {
    period: "2015.03 - 2017.03",
    title: "사회복무요원",
    description: "시청 근무",
  },
  {
    period: "2021.03 - 현재",
    title: "대림 대학교 소프트웨어 학부",
    description: "프로그램 기초, 컴퓨터 기초 과목 이수",
  },
];

export default function HistoryPage() {
  return (
    <AppShell>
      <section className="px-4 py-16">
        <Title title="지도" subTitle="MAP"></Title>
        <div className="w-full bg-muted relative overflow-hidden rounded-md mt-6 h-100">
          <iframe
            title="오시는 길"
            className="h-100 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              "대림대학교"
            )}&output=embed`}
          ></iframe>
        </div>
      </section>

      <div>
        <Title title="개인 연혁" subTitle="HISTORY"></Title>
        <section className="px-4 py-16">
          <CardItems items={timelines}></CardItems>
        </section>
      </div>
    </AppShell>
  );
}

type CardItemType = {
  period: string;
  title: string;
  description: string;
};

function CardItems({ items }: { items: CardItemType[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <CardItem
          key={index}
          period={item.period}
          title={item.title}
          description={item.description}
        ></CardItem>
      ))}
    </div>
  );
}

function CardItem({ period, title, description }: CardItemType) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{period}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
