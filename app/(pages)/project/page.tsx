"use client";

import AppShell from "@/components/grid/appShell";
import Api from "@/lib/api";
import Project from "@/types/project/project";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const init = async () => {
      const res = await Api().getProject();
      setProjects(res);
    };
    init();
  }, []);

  return (
    <AppShell>
      여기는 프로젝트 페이지 입니다.
      <div>{JSON.stringify(projects)}</div>
    </AppShell>
  );
}
