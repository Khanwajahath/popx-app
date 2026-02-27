import { useState } from "react";
import { PURPLE,PURPLE_LIGHT } from "./constants";
interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function SecondaryButton({ children, onClick }:SecondaryButtonProps) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "100%",
        padding: "15px 0",
        borderRadius: 8,
        border: `1.5px solid ${PURPLE}`,
        background: hov ? PURPLE_LIGHT : "transparent",
        color: PURPLE,
        fontFamily: "inherit",
        fontSize: 16,
        fontWeight: 600,
        cursor: "pointer",
        transition: "background 0.2s",
        letterSpacing: 0.3,
      }}
    >
      {children}
    </button>
  );
}
