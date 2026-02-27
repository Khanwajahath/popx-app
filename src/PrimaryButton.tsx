import { useState } from "react";
import { PURPLE,PURPLE_DARK } from "./constants";
interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function PrimaryButton({ children, onClick, disabled, style }:PrimaryButtonProps) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "100%",
        padding: "15px 0",
        borderRadius: 8,
        border: "none",
        background: disabled ? "#C4C4C4" : hov ? PURPLE_DARK : PURPLE,
        color: "#fff",
        fontFamily: "inherit",
        fontSize: 16,
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.2s, transform 0.1s",
        transform: hov && !disabled ? "translateY(-1px)" : "none",
        letterSpacing: 0.3,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
