'use client'

import AppShell from "@/components/grid/appShell";
import TranslateScroll from "@/components/scroll/translateScroll";

export default function TilPage() {
    const links = [
        { title: 'shadcn', info:'shadcn alert, button ...', color:'bg-red-100', link: '/shadcn' },
        { title: 'tailwind', info: 'color system', color: 'bg-green-100', link: '/tailwind' },
        { title: 'next-image', info: 'next.js Image component', color:'bg-blue-100', link: '/nextImage' }
    ]

    const rightPannel = {
        children: <div>
            hello, Right Pannel
        </div>
    }

    return (
        <AppShell rightPannel={rightPannel}>
            
            <section className="w-full flex justify-center">
                <div className="w-full min-w-[980px] max-w-[1280px] space-y-4">
                    <TranslateScroll items={links} movingX={200}>
                        <div className="text-4xl font-semibold">
                            오늘 배운 것을, 오늘 남기자.
                        </div>
                        <div className="text-2xl font-semibold">
                            하루 한 줄 기록으로 성장 곡선을 만듭니다.
                        </div>
                    </TranslateScroll>
                </div>

            </section>
        </AppShell>
    )
    
}