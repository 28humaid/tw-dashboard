import Sidebar from "@/components/common/Sidebar";
import { menuItems } from "@/lib/sidebar-menu";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
    <Sidebar items={menuItems}/>
    <main className="flex-1 min-w-0 p-4 py-16 lg:py-4">{children}</main>
    </div>
  );
}