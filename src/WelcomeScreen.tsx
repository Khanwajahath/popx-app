import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondryButton";

  interface welcome {
    onCreateAccount:() => void ,
    onLogin: () => void
  }

export function WelcomeScreen({ onCreateAccount, onLogin }:welcome) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 24px 48px",
        background: "linear-gradient(170deg, #F5F0FF 0%, #FFFFFF 50%)",
        minHeight: 667,
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: 80, right: -30,
        width: 180, height: 180,
        background: "radial-gradient(circle, rgba(108,56,204,0.12) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", top: 200, left: -40,
        width: 140, height: 140,
        background: "radial-gradient(circle, rgba(108,56,204,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      {/* Content */}
      <div style={{ animation: "fadeUp 0.6s ease" }}>
        <h1 style={{
          fontSize: 28,
          fontWeight: 800,
          color: "#1A1A1A",
          margin: "0 0 10px",
          lineHeight: 1.25,
          letterSpacing: -0.5,
        }}>
          Welcome to PopX
        </h1>
        <p style={{
          fontSize: 15,
          color: "#666",
          margin: "0 0 32px",
          lineHeight: 1.6,
          maxWidth: 260,
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <PrimaryButton onClick={onCreateAccount}>Create Account</PrimaryButton>
          <SecondaryButton onClick={onLogin}>Already Registered? Login</SecondaryButton>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}