"use client";

import {
  AlertCircleIcon,
  CheckCircle2Icon,
  PopcornIcon,
  DotIcon,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/system/toast";

type myAlertVariant = "info" | "success" | "warn" | "error";

export default function ShadcnPage() {
  const myAlerts: { variant: myAlertVariant }[] = [
    { variant: "info" },
    { variant: "success" },
    { variant: "warn" },
    { variant: "error" },
  ];

  return (
    <div className="p-20 space-y-12">
      <div className="space-y-8">
        <div className="text-3xl font-bold"> Alert </div>
        {myAlerts.map((myAlert, i) => (
          <Alert key={i} variant={myAlert.variant}>
            <CheckCircle2Icon />
            <AlertTitle>{myAlert.variant} Alert Title</AlertTitle>
            <AlertDescription>
              {myAlert.variant} Alert AlertDescription
            </AlertDescription>
          </Alert>
        ))}

        <Alert>
          <PopcornIcon />
          <AlertTitle>
            This Alert has a title and an icon. No description.
          </AlertTitle>
        </Alert>

        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Unable to process your payment.</AlertTitle>
          <AlertDescription>
            Please verify your billing information and try again.
            <div className="space-y-1 text-sm">
              <div className="flex">
                <DotIcon></DotIcon>
                Check your card details
              </div>
              <div className="flex">
                <DotIcon></DotIcon>
                Ensure sufficient funds
              </div>
              <div className="flex">
                <DotIcon></DotIcon>
                Verify billing address
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-8">
        <div className="text-3xl font-bold"> Alert Dialog </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="space-y-8">
        <div className="text-3xl font-bold"> Toaster (Sonner) </div>
        <div className="grid grid-cols-4 gap-3">
          <Button
            onClick={() => {
              toast("hello!!");
            }}
          >
            {" "}
            Default{" "}
          </Button>

          <Button
            onClick={() => {
              toast.success("success");
            }}
          >
            {" "}
            success{" "}
          </Button>

          <Button
            onClick={() => {
              toast.error("에러가 발생했습니다", {
                description: "에러가 발생했습니다.",
              });
            }}
          >
            {" "}
            error{" "}
          </Button>

          <Button
            onClick={async () => {
              await toast.promise(
                new Promise((resolve, reject) =>
                  setTimeout(Math.random() > 0.5 ? reject : resolve, 1500)
                ),
                {
                  loading: "블로그 업로드 중입니다.",
                  success: "블로그 업로드가 완료되었습니다.",
                  error: "네트워크 에러가 발생했습니다.",
                }
              );
            }}
          >
            {" "}
            블로그 업로드{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
