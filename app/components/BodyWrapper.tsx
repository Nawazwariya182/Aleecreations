"use client";

import { useEffect } from "react";

export default function BodyWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return <div className={className}>{children}</div>;
}
