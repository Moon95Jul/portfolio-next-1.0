import { cn } from "@/lib/utils";

export default function TailwindPage() {
  const colors = [
    { name: "primary", rgb: "#5551FF", className: "bg-primary" },
    { name: "info", rgb: "#2b7fff", className: "bg-info" },
    { name: "success", rgb: "#00a63e", className: "bg-success" },
    { name: "warn", rgb: "#ff6900", className: "bg-warn" },
    { name: "error", rgb: "#e7000b", className: "bg-error" },

    { name: "secondary", rgb: "#FFB629", className: "bg-secondary" },
    { name: "info-100", rgb: "#f8fbff", className: "bg-info-100" },
    { name: "success-100", rgb: "#ecfdf5", className: "bg-success-100" },
    { name: "warn-100", rgb: "#fefce8", className: "bg-warn-100" },
    { name: "error-100", rgb: "#fef2f2", className: "bg-error-100" },
  ];

  return (
    <div className="p-20 space-y-12">
      <div className="space-y-8">
        <div className="text-3xl font-bold"> Color System </div>
        <div className="grid gap-2 grid-cols-5">
          {colors.map((color, i) => (
            <div key={i}>
              <div className={cn("size-30", color.className)}></div>
              <p className="text-xl font-semibold">
                <span> {color.name} </span>
                <span className="text-gray-500"> {color.rgb} </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
