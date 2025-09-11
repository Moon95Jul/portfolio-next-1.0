"use client";

import { Toaster } from "sonner";

export default function GlobalToaster() {
  return (
    <Toaster
      // 전역 기본 옵션
      position="top-center"
      theme="system"
      richColors // success/error/info 등 색상을 좀 더 선명하게
      closeButton
      expand={false}
      duration={2500}
      toastOptions={{
        classNames: {
          toast:
            "rounded-md border border-gray-200 bg-white shadow-md text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50",
          title: "font-semibold",
          description: "text-sm text-gray-600 dark:text-gray-300",
          actionButton: "bg-blue-600 text-white hover:bg-blue-700",
          cancelButton:
            "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100",
        },
      }}
    />
  );
}
