import { PrimaryButton } from "./PrimaryButton";
import { useState } from "react";
import { FloatingInput } from "./FloatingInput";
import { PURPLE } from "./constants";
// Register form — all fields the registration form collects
interface RegisterForm {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  company: string;
  isAgency: "yes" | "no"; // union literal — tighter than plain string
}


interface RegisterScreenProps {
  onSubmit: (form: RegisterForm) => void; // receives full form data
  onBack: () => void;
}

export function RegisterScreen({ onSubmit, onBack }: RegisterScreenProps) {
  const [form, setForm] = useState<RegisterForm>({
    fullName: "", phone: "", email: "", password: "", company: "", isAgency: "yes",
  });

  // field is constrained to keys of RegisterForm — typos caught at compile time
  const set = (field: keyof RegisterForm) => (val: string) =>
    setForm((f) => ({ ...f, [field]: val }));

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 667 }}>
      <div style={{ padding: "16px 24px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", cursor: "pointer",
          color: PURPLE, fontSize: 22, lineHeight: 1, padding: 4,
          display: "flex", alignItems: "center",
        }}>
          ←
        </button>
      </div>

      <div style={{ flex: 1, padding: "20px 24px 32px", overflowY: "auto" }}>
        <h2 style={{
          fontSize: 24, fontWeight: 800, color: "#1A1A1A",
          margin: "0 0 28px", lineHeight: 1.3, letterSpacing: -0.4,
        }}>
          Create your<br />PopX account
        </h2>

        <FloatingInput label="Full Name"      required value={form.fullName} onChange={set("fullName")} />
        <FloatingInput label="Phone number"   type="tel"      required value={form.phone}    onChange={set("phone")}    />
        <FloatingInput label="Email address"  type="email"    required value={form.email}    onChange={set("email")}    />
        <FloatingInput label="Password"       type="password" required value={form.password} onChange={set("password")} />
        <FloatingInput label="Company name"            value={form.company}  onChange={set("company")}  />

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 14, color: "#1A1A1A", margin: "0 0 10px", fontWeight: 500 }}>
            Are you an Agency?<span style={{ color: PURPLE }}> *</span>
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {(["yes", "no"] as const).map((opt) => (
              <label key={opt} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <div
                  onClick={() => set("isAgency")(opt)}
                  style={{
                    width: 20, height: 20, borderRadius: "50%",
                    border: `2px solid ${form.isAgency === opt ? PURPLE : "#ccc"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "border-color 0.15s",
                  }}
                >
                  {form.isAgency === opt && (
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: PURPLE }} />
                  )}
                </div>
                <span style={{ fontSize: 15, color: "#333", textTransform: "capitalize" }}>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <PrimaryButton
          onClick={() => onSubmit(form)}
          disabled={!form.fullName || !form.phone || !form.email || !form.password}
        >
          Create Account
        </PrimaryButton>
      </div>
    </div>
  );
}