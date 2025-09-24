'use client'

import { useRouter } from "next/navigation"
import { ReactNode, useMemo, useRef, useState } from "react"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Item = {
    title: string
    info: string
    color: string
    link?: string
}

interface Props {
    items: Item[]
    movingX?: number
    children?: ReactNode
}

export default function TranslateScroll({ items, movingX = 500, children }: Props) {
    const router = useRouter()

    const translateRef = useRef<HTMLDivElement>(null)
    const [ offset, setOffset ] = useState(0)

    const disabledNext = useMemo(() => {
        if (!translateRef.current) {
          return false
        }
    
        return (translateRef.current.scrollWidth + offset - movingX) <= 0
    }, [movingX, offset])
    
    const move = (dir:  'prev' | 'next') => {
        if (!translateRef.current) {
        return
        }
    
        if (dir === 'next' && disabledNext
        ) {
        return
        }
    
        const delta = dir === 'prev'?1:-1
        setOffset(offset + (delta * movingX))
    }

    return (
        <div className="space-y-4">
            <div className="flex space-x-2">
                <div>
                    { children }
                </div>
            
                <div className="flex-auto"></div>
                <Button size='icon' disabled={offset >= 0} onClick={() => move('prev')}> 
                    <ChevronLeft></ChevronLeft>
                </Button>
                <Button size='icon' disabled={disabledNext} onClick={() => move('next')}>  
                    <ChevronRight></ChevronRight>
                </Button>
            </div>
            
            <div
                ref={translateRef}
                className="w-full flex overflow-x-visible space-x-8 will-change-transform"
                style={{
                    transform: `translateX(${offset}px)`,
                    transition: 'transform .35s ease'
                }}
            >
            {
                items.map((link , i) => (
                <div key={i} className={cn("min-w-[300px] h-[200px] p-8 shadow-xs", link.color)}
                    onClick={() => link.link && router.push(link.link)}
                >
                    <div className="text-xl font-semibold pb-2"> {link.title} </div>
                    <div> {link.info} </div>
                </div>
                ))
            }
            </div>
        </div>
    )
}
