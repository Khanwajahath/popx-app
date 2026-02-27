import { useState } from "react";
import { WelcomeScreen } from "./WelcomeScreen";
import { RegisterScreen } from "./RegisterScreen";
import { AccountSettingsScreen } from "./AccountSettingsScreen";
import { LoginScreen } from "./LoginScreen";

 

const styles = {
  app: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    background: "#F9F9F9",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"40%",
    width:"100%"
  },
  phone: {
    width: 375,
    minHeight: 667,
    background: "#fff",
    borderRadius: 24,
    boxShadow: "0 20px 60px rgba(108,56,204,0.15)",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
}as const;
 interface User {
  fullName: string;
  email: string;
}
interface LoginCredentials {
  email: string;
  password: string;
}

 

export default function App() {
  const [screen, setScreen] = useState("welcome"); // welcome | register | login | settings
  const [userData, setUserData] = useState<User|null>(null);

  const handleRegister = (form:User) => {
    setUserData(form);
    setScreen("settings");
  };

  const handleLogin = (creds:LoginCredentials ) => {
    setUserData({ fullName: "Marry Doe", email: creds.email });
    setScreen("settings");
  };

  return (
    <div style={styles.app}>
      <div style={styles.phone}>
        {screen === "welcome" && (
          <WelcomeScreen
            onCreateAccount={() => setScreen("register")}
            onLogin={() => setScreen("login")}
          />
        )}
        {screen === "register" && (
          <RegisterScreen
            onSubmit={handleRegister}
            onBack={() => setScreen("welcome")}
          />
        )}
        {screen === "login" && (
          <LoginScreen
            onSubmit={handleLogin}
            onBack={() => setScreen("welcome")}
          />
        )}
        {screen === "settings" && (
          <AccountSettingsScreen user={userData} />
        )}
      </div>
    </div>
  );
}
