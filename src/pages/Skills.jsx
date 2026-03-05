import { useState } from "react";
import { skillsData } from "../data/dummyData";
import { useNavigate } from "react-router-dom";

function Skills() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filters = ["All", "Teach", "Learn"];

  const filtered = skillsData.filter((s) => {
    const matchType = filter === "All" || s.type === filter;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div>
      <div className="section-header">
        <div>
          <div className="page-title">My Skills</div>
          <div className="page-subtitle">{skillsData.length} skills in your portfolio</div>
        </div>
        <button className="primary-btn" onClick={() => navigate("/add-skill")}>
          + Add Skill
        </button>
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="input-field"
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ paddingLeft: "40px" }}
        />
      </div>

      <div className="tags-row">
        {filters.map((f) => (
          <button
            key={f}
            className={`tag-filter ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">◎</div>
          <p>No skills found. Try a different filter.</p>
        </div>
      ) : (
        filtered.map((skill) => (
          <div className="skill-row" key={skill.id}>
            <div>
              <div className="skill-name">{skill.name}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "3px" }}>
                {skill.category} · {skill.level}
              </div>
            </div>
            <div className="skill-row-actions">
              <span className={`skill-badge ${skill.type.toLowerCase()}`}>
                {skill.type === "Teach" ? "▲" : "▼"} {skill.type}
              </span>
              <button className="danger-btn">Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Skills;