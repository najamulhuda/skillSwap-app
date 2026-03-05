import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const profileSkills = ["React.js", "UI Design", "Python"];

function Profile() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Najam Ul Huda");
  const [bio, setBio] = useState("Passionate developer & designer. Love exchanging skills and building things.");

  return (
    <div>
      <div className="profile-hero">
        <div className="profile-avatar">N</div>
        <div className="profile-info">
          <h2>{name}</h2>
          <div className="profile-email">najam@email.com</div>
          <div className="profile-meta">
            <div className="profile-meta-item">◈ <span>12</span> skills</div>
            <div className="profile-meta-item">⇄ <span>8</span> swaps done</div>
            <div className="profile-meta-item">✦ <span>4.9</span> rating</div>
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <button className="secondary-btn" onClick={() => setEditing(!editing)}>
            {editing ? "Cancel" : "✎ Edit Profile"}
          </button>
        </div>
      </div>

      <div className="profile-grid">
        <Card>
          <h3 style={{ marginBottom: "14px", fontSize: "1rem" }}>About</h3>
          {editing ? (
            <>
              <div className="input-wrapper">
                <label className="input-label">Display Name</label>
                <input
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label className="input-label">Bio</label>
                <textarea
                  className="input-field"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={3}
                  style={{ resize: "vertical" }}
                />
              </div>
              <Button text="Save Changes" onClick={() => setEditing(false)} />
            </>
          ) : (
            <>
              <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>{bio}</p>
              <div style={{ marginTop: "16px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {profileSkills.map((s) => (
                  <span key={s} className="skill-badge teach">{s}</span>
                ))}
              </div>
            </>
          )}
        </Card>

        <Card>
          <h3 style={{ marginBottom: "14px", fontSize: "1rem" }}>Swap Stats</h3>
          {[
            { label: "Profile Completion", val: 85 },
            { label: "Response Rate", val: 92 },
            { label: "Match Score", val: 78 },
          ].map(({ label, val }) => (
            <div key={label} style={{ marginBottom: "18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", marginBottom: "4px" }}>
                <span style={{ color: "var(--muted)" }}>{label}</span>
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>{val}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${val}%` }} />
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default Profile;