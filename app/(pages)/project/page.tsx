"use client";

import AppShell from "@/components/grid/appShell";
import Api from "@/lib/api";
import Project from "@/types/project/project";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const init = async () => {
      setProjects(await Api().getProject());
    };
    init();
  }, []);

  return (
    <AppShell>
      <div className="space-y-4">
        {projects.map((project, i) => (
          <div
            className="border p-4 space-y-3 rounded-xl bg-slate-50 shadow-xs"
            key={i}
          >
            <div className="text-xl font-semibold">{project.title}</div>
            <div className="pt-2">{project.content}</div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
