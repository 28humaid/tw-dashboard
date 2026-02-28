"use client";

import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type QuickLinkCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
};

export default function QuickLinkCard({ title, description, icon: Icon, route }: QuickLinkCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(route)}
      className="bg-[var(--content-background)] p-4 rounded-xl shadow-xl flex-1 min-w-[140px] 2xl:min-w-[190px] min-h-[100px] flex flex-col gap-2 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:z-10 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{title}</p>
        <Icon size={20}/>
      </div>
      <p className="text-xs text-[var(--text-grey-color)] opacity-70">{description}</p>
    </div>
  );
}