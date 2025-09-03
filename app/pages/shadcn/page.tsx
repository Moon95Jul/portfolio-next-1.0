"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { toast } from "sonner";

export default function ShadcnPage() {
  const myAlerts = [
    { variant: "info" },
    { variant: "success" },
    { variant: "warn" },
    { variant: "error" },
  ];

  return (
    <div>
      <div className="text-3xl font-bold"> Alert </div>
      {myAlerts.map((myAlert, i) => (
        <Alert
          key={i}
          variant={myAlert.variant as "info" | "success" | "warn" | "error"}
        >
          <CheckCircle2Icon></CheckCircle2Icon>
          <AlertTitle>{myAlert.variant} Alert Title</AlertTitle>
          <AlertDescription>
            {myAlert.variant} Alert AlertDescription
          </AlertDescription>
        </Alert>
      ))}

      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}
