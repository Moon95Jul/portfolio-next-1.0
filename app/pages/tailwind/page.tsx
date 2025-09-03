import { cn } from "@/lib/utils";

export default function TailwindPage() {
  const colors = [
    { name: "primary", rgb: "#5551ff", className: "bg-[#5551ff]" },
    { name: "info", rgb: "#2b7fff", className: "bg-[#2b7fff]" },
    { name: "success", rgb: "#00a63e", className: "bg-[#00a63e]" },
    { name: "warn", rgb: "#ff6900", className: "bg-[#ff6900]" },
    { name: "error", rgb: "#e7000b", className: "bg-[#e7000b]" },

    { name: "secondary", rgb: "#a5a3ff", className: "bg-[#a5a3ff]" },
    { name: "info-100", rgb: "#8fc3ff", className: "bg-[#8fc3ff]" },
    { name: "success-100", rgb: "#66d19e", className: "bg-[#66d19e]" },
    { name: "warn-100", rgb: "#ffb380", className: "bg-[#ffb380]" },
    { name: "error-100", rgb: "#ff7a85", className: "bg-[#ff7a85]" },
  ];

  return (
    <div className="p-20 space-y-12">
      <div className="space-y-8">
        <div className="text-3xl font-bold"> Color System</div>
        <div className="grid grid-cols-5">
          {colors.map((color, i) => (
            <div key={i}>
              <div
                className={cn(
                  "size-30 flex items-center justify-center",
                  `bg-[${color.rgb}]`
                )}
              ></div>
              <p className="text-black text-xl font-semi">
                <span>{color.name}</span>{" "}
                <span className="text-gray-400">{color.rgb}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
