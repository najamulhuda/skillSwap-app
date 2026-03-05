import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const categories = ["Frontend", "Backend", "Design", "DevOps", "Mobile", "Data Science", "Other"];
const levels = ["Beginner", "Intermediate", "Advanced"];

function AddSkill() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", type: "Teach", category: "", level: "" });
  const [submitted, setSubmitted] = useState(false);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleAdd = () => {
    if (!form.name || !form.category || !form.level) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      navigate("/skills");
    }, 1500);
  };

  return (
    <div style={{ maxWidth: "540px" }}>
      <div className="page-title">Add a Skill</div>
      <div className="page-subtitle">Share what you can teach or want to learn</div>

      <div className="card">
        <Input
          type="text"
          placeholder="e.g. React.js, Graphic Design..."
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          label="Skill Name"
        />

        <div className="input-wrapper">
          <label className="input-label">Skill Type</label>
          <div style={{ display: "flex", gap: "10px" }}>
            {["Teach", "Learn"].map((t) => (
              <button
                key={t}
                onClick={() => set("type", t)}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "10px",
                  border: `1px solid ${form.type === t ? "var(--accent)" : "var(--border)"}`,
                  background: form.type === t ? "rgba(0,212,170,0.1)" : "var(--surface2)",
                  color: form.type === t ? "var(--accent)" : "var(--muted)",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  transition: "all 0.2s",
                }}
              >
                {t === "Teach" ? "▲ I can Teach" : "▼ I want to Learn"}
              </button>
            ))}
          </div>
        </div>

        <div className="input-wrapper">
          <label className="input-label">Category</label>
          <select
            className="input-field"
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
          >
            <option value="">Select category...</option>
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="input-wrapper">
          <label className="input-label">Proficiency Level</label>
          <div style={{ display: "flex", gap: "8px" }}>
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => set("level", l)}
                style={{
                  flex: 1,
                  padding: "9px",
                  borderRadius: "10px",
                  border: `1px solid ${form.level === l ? "var(--accent2)" : "var(--border)"}`,
                  background: form.level === l ? "rgba(14,165,233,0.1)" : "var(--surface2)",
                  color: form.level === l ? "var(--accent2)" : "var(--muted)",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.82rem",
                  transition: "all 0.2s",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <Button
          text={submitted ? "✓ Skill Added!" : "Add Skill →"}
          onClick={handleAdd}
          style={{ width: "100%", marginTop: "8px" }}
        />
      </div>

      {submitted && (
        <div className="toast">
          ✦ Skill added successfully! Redirecting...
        </div>
      )}
    </div>
  );
}

export default AddSkill;