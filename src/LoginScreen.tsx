import { useState } from "react";
import { PURPLE } from "./constants";
import { FloatingInput } from "./FloatingInput";
import { PrimaryButton } from "./PrimaryButton";

interface LoginCredentials {
  email: string;
  password: string;
}
 
interface loginProps{
    onSubmit:(creds:LoginCredentials)=>void,
    onBack:()=>void
}


export function LoginScreen({ onSubmit, onBack }:loginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ready = email && password;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 667 }}>
      <div style={{
        padding: "16px 24px 0",
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", cursor: "pointer",
          color: PURPLE, fontSize: 22, lineHeight: 1, padding: 4,
        }}>
          ←
        </button>
      </div>

      <div style={{ flex: 1, padding: "28px 24px 32px" }}>
        <h2 style={{
          fontSize: 24, fontWeight: 800, color: "#1A1A1A",
          margin: "0 0 10px", lineHeight: 1.3, letterSpacing: -0.4,
        }}>
          Signin to your<br />PopX account
        </h2>
        <p style={{ fontSize: 14, color: "#666", margin: "0 0 32px", lineHeight: 1.6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <FloatingInput label="Email Address" type="email" required value={email} onChange={setEmail} />
        <FloatingInput label="Password" type="password" required value={password} onChange={setPassword} />

        <div style={{ marginTop: 8 }}>
          <PrimaryButton onClick={() => onSubmit({ email, password })} disabled={!ready}>
            Login
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
