import { Highlight, RenderProps, themes } from "prism-react-renderer"

export default function Page() {
    const original =`
<div className="whitespace-pre-wrap">
    {
    \`작은 기술이라도\n선하게 쓰이면\n세상이 달라진다는 믿음.\n카카오임팩트가 존재하는\n이유입니다.\`
    }
</div>
`
    return (
        <div className="p-20 space-y-12">
            <div className="space-y-8">

                <div className="text-3xl font-bold"> Break Word </div>
                <div className="text-xl font-bold"> 원문 </div>
                <div className="text-xl font-bold"> whitespace-pre-wrap </div>
                <div className="text-xl font-bold"> br </div>
                <div className="text-xl font-bold"> break-keep </div>
                <div className="text-xl font-bold"> text-balance </div>
            </div>
        </div>
    )
}