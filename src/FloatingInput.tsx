import { PURPLE } from "./constants";
import { useState } from "react";

interface FloatingInputProps {
  label: string;
  type?: string;        // optional — has default value "text"
  value: string;
  onChange: (val: string) => void;
  required?: boolean;   // optional — not every field is required
}

export function FloatingInput({ label, type = "text", value, onChange, required }:FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;
  return (
    <div style={{ position: "relative", marginBottom: 16 }}>
      <label
        style={{
          position: "absolute",
          left: 12,
          top: active ? -9 : 14,
          fontSize: active ? 11 : 14,
          color: active ? PURPLE : "#999",
          background: active ? "#fff" : "transparent",
          padding: active ? "0 4px" : "0",
          transition: "all 0.18s ease",
          pointerEvents: "none",
          fontWeight: active ? 600 : 400,
          zIndex: 1,
        }}
      >
        {label}{required && <span style={{ color: PURPLE }}> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "14px 12px",
          border: `1.5px solid ${focused ? PURPLE : "#E0E0E0"}`,
          borderRadius: 8,
          fontFamily: "inherit",
          fontSize: 14,
          color: "#333",
          outline: "none",
          background: "#fff",
          boxSizing: "border-box",
          transition: "border-color 0.18s",
        }}
      />
    </div>
  );
}
