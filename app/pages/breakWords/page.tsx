import { Highlight, themes } from "prism-react-renderer";

export default function Page() {
  const original = `
    <div className="whitespace-pre-wrap">
    {
    \`작은 기술이라도 \n선하게 쓰이면 \n세상이 달라진다는 믿음,\n카카오임팩트가 \n존재하는 이유입니다.\`
    }
    </div>
    `;

  return (
    <div className="p-20 space-y-12">
      <div className="space-y-8">
        <div className="text-3xl font-bold"> break words </div>
        <div className="text-xl fond-bold"> whitespace-pre-wrap </div>
        <div className="text-xl fond-bold"> break-keep </div>
        <div className="text-xl fond-bold"> text-balance </div>
      </div>
    </div>
  );
}
