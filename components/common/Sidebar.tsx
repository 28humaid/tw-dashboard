// app/components/Sidebar.tsx
"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";

interface MenuItem {
  label: string; // i18n key
  href?: string;
  children?: Omit<MenuItem, "children">[];
  icon?: React.ReactNode;
}

interface SidebarProps {
  items: MenuItem[];
}

export default function Sidebar({ items }: SidebarProps) {
  const { t } = useTranslation();
  const pathname = usePathname();

  // Mobile menu state
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Desktop collapse state
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Detect large screen
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleCollapse = () => {
    if (isLargeScreen) {
      setIsCollapsed(!isCollapsed);
    }
  };

  const sidebarWidth = isCollapsed ? "w-16" : "w-64";

  // Helper to check if a link should be considered active
  const isActive = (href?: string): boolean => {
    if (!href) return false;
    // Exact match or startsWith (useful for nested routes)
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="fixed top-4 start-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle menu"
      >
        {!isMobileOpen && (
          <div className="p-2 rounded-md bg-gray-200 text-gray-900">
            <Menu size={24} />
          </div>
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
          lg:sticky lg:top-0 lg:translate-x-0 lg:transition-none
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          ${isLargeScreen ? sidebarWidth : "w-64"}
          h-screen overflow-y-auto bg-[var(--section-background)] 
          border-r border-gray-200`}
      >
        <div className="flex flex-col h-full">
          {/* Header / Logo + Collapse button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}>
              {isCollapsed ? null : (
                <div className="w-40 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                  App logo
                </div>
              )}
            </div>

            {isLargeScreen && (
              <button
                onClick={toggleCollapse}
                className="p-1 rounded hover:bg-gray-200"
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {isCollapsed ? <ChevronRightIcon size={20} /> : <ChevronLeft size={20} />}
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4">
            <ul className="space-y-2">
              {items.map((item, index) => {
                const hasActiveChild = item.children?.some((child) => isActive(child.href)) ?? false;

                return (
                  <li key={index}>
                    {item.children ? (
                      <details className="group" open={hasActiveChild}>
                        <summary
                          className={`
                            flex items-center px-3 py-2 text-gray-900 
                            rounded-md cursor-pointer transition-colors
                            ${isCollapsed ? "justify-center" : "justify-between"}
                            ${
                              hasActiveChild
                                ? "bg-gray-200/70 font-medium"
                                : "hover:bg-gray-100"
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            {item.icon || <span className="w-5 h-5" />}
                            <span className={`${isCollapsed ? "hidden" : "block"}`}>
                              <p className="text-[14px]">{t(item.label)}</p>
                            </span>
                          </div>
                          {!isCollapsed && <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />}
                        </summary>

                        {!isCollapsed && (
                          <ul className="mt-1 pl-8 space-y-2">
                            {item.children.map((sub, subIndex) => {
                              const active = isActive(sub.href);

                              return (
                                <li key={subIndex}>
                                  <Link
                                    href={sub.href || "#"}
                                    className={`
                                      block px-3 py-2 rounded-md text-sm transition-colors
                                      ${
                                        active
                                          ? "bg-gray-100 font-medium border-s-4 border-[val(--bg-4)] pl-[calc(0.75rem-1px)]"
                                          : "text-gray-700 hover:bg-gray-100"
                                      }
                                    `}
                                  >
                                    <p className="text-[13px]">{t(sub.label)}</p>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </details>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className={`
                          flex items-center gap-3 px-3 py-2 rounded-md transition-colors
                          ${isCollapsed ? "justify-center" : ""}
                          ${
                            isActive(item.href)
                              ? "bg-gray-100 font-medium border-s-4 border-[val(--bg-4)] pl-[calc(0.75rem-1px)]"
                              : "text-gray-900 hover:bg-gray-100"
                          }
                        `}
                      >
                        {item.icon || <span className="w-5 h-5" />}
                        <span className={`${isCollapsed ? "hidden" : "block"}`}>
                          <p className="text-[14px]">{t(item.label)}</p>
                        </span>
                        {!isCollapsed && item.href && (
                          <ChevronRight className="w-4 h-4 ml-auto flip-in-rtl" />
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}