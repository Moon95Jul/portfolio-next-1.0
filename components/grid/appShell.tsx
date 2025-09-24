import { ReactNode } from "react"
import Header from "./header"

interface RightPannel {
    children: ReactNode
}

interface Props {
    children: ReactNode
    rightPannel?: RightPannel
}

export default function AppShell({
    children,
    rightPannel
}: Props) {


    return (
        <div className="w-dvw h-dvh flex">
            <div className="flex-auto">
                <Header></Header>
                <div className="flex justify-center">
                    <div className="w-full max-w-[1280px]">
                        { children }
                    </div>
                </div>
            </div>
            {rightPannel && <div className="w-[240px] h-full shadow-md bg-slate-100">
                { rightPannel.children }    
            </div>}
        </div>
    )
}
