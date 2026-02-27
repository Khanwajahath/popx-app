import { PURPLE,PURPLE_DARK,PURPLE_LIGHT } from "./constants";
import { useState } from "react";
import { useRef } from "react";
  interface User {
  fullName: string;
  email: string;
}

interface AccountSettingsProps {
  user: User | null;  // ← must allow null since initial state is null
}



export function AccountSettingsScreen({user }:AccountSettingsProps) {

  const [avatar, setAvatar] = useState<string>("https://i.pravatar.cc/100?img=47");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [badgeHov, setBadgeHov] = useState<boolean>(false);
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  const file = e.target.files?.[0];
  if (!file) return;
  const localUrl = URL.createObjectURL(file); // turns File → previewable URL
  setAvatar(localUrl);
};

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 667 }}>
      {/* Top header */}
      <div style={{
        padding: "20px 24px",
        borderBottom: "1px solid #F0F0F0",
      }}>
        <h2 style={{
          fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: 0,
        }}>
          Account Settings
        </h2>
      </div>

      {/* Profile card */}
      <div style={{
        padding: "24px",
        borderBottom: "1px dashed #E0E0E0",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        {/* Avatar with badge */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{
            width: 64, height: 64, borderRadius: "50%",
            overflow: "hidden",
            border: `3px solid ${PURPLE_LIGHT}`,
          }}>
             <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: "none" }} // invisible but functional
            />
            <img
              src={avatar}
              alt="avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Camera badge */}
          <div style={{
            position: "absolute", bottom: 0, right: 0,
            width: 22, height: 22, borderRadius: "50%",
            background: PURPLE,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "2px solid #fff",
          }}>
            <span
              onClick={() => fileInputRef.current?.click()}
              onMouseEnter={() => setBadgeHov(true)}
              onMouseLeave={() => setBadgeHov(false)}
              style={{
                fontSize: 10,
                color: "#fff",
                cursor: "pointer",
                background: badgeHov ? PURPLE_DARK : PURPLE,  // ← darkens on hover
                transition: "background 0.2s, transform 0.15s",
                transform: badgeHov ? "scale(1.2)" : "scale(1)", // ← subtle grow
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            >
              ✎
            </span>
          </div>
        </div>

        {/* Name & email */}
        <div>
          <p style={{ margin: "0 0 3px", fontWeight: 700, fontSize: 16, color: "#1A1A1A" }}>
            {user?.fullName || "Marry Doe"}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: "#666" }}>
            {user?.email || "Marry@Gmail.Com"}
          </p>
        </div>
      </div>

      {/* Bio section */}
      <div style={{ padding: "20px 24px", borderBottom: "1px dashed #E0E0E0" }}>
        <p style={{ margin: 0, fontSize: 14, color: "#555", lineHeight: 1.7 }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      {/* Stats row */}
      <div style={{
        display: "flex",
        borderBottom: "1px dashed #E0E0E0",
      }}>
        {[["Posts", "12"], ["Followers", "4.2k"], ["Following", "284"]].map(([label, val], i) => (
          <div
            key={label}
            style={{
              flex: 1,
              padding: "18px 0",
              textAlign: "center",
              borderRight: i < 2 ? "1px dashed #E0E0E0" : "none",
            }}
          >
            <p style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 800, color: "#1A1A1A" }}>{val}</p>
            <p style={{ margin: 0, fontSize: 12, color: "#999" }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Tags / settings options */}
      <div style={{ padding: "16px 24px", flex: 1 }}>
        {["Edit Profile", "Change Password"].map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 0",
              borderBottom: "1px solid #F5F5F5",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 15, color: "#333", fontWeight: 500 }}>{item}</span>
            <span style={{ color: "#ccc", fontSize: 18 }}>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}
