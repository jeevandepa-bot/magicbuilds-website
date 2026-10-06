"use client";

import { usePathname } from "next/navigation";

export function VisibilityWrapper({
  children,
  hideOnRoutes = ["/dashboard", "/login"],
}: {
  children: React.ReactNode;
  hideOnRoutes?: string[];
}) {
  const pathname = usePathname();
  
  const shouldHide = hideOnRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (shouldHide) return null;

  return <>{children}</>;
}
