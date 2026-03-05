import { activityData } from "../data/dummyData";

const stats = [
  { icon: "◈", value: "12", label: "Total Skills", change: "+2 this week", up: true },
  { icon: "⇄", value: "5", label: "Requests Sent", change: "+1 today", up: true },
  { icon: "⇊", value: "3", label: "Requests Received", change: "2 pending", up: null },
  { icon: "✦", value: "8", label: "Matches Found", change: "+3 this week", up: true },
];

function Dashboard() {
  return (
    <div>
      <div className="page-title">Good morning, Najam 👋</div>
      <div className="page-subtitle">Here's your skill activity overview</div>

      <div className="dashboard-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <span className="stat-icon">{s.icon}</span>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
            {s.change && (
              <div className={`stat-change ${s.up === true ? "up" : s.up === false ? "down" : ""}`}>
                {s.up === true ? "▲" : s.up === false ? "▼" : "•"} {s.change}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section-header">
        <h2>Recent Activity</h2>
        <button className="secondary-btn" style={{ fontSize: "0.78rem", padding: "6px 14px" }}>
          View All
        </button>
      </div>

      <div>
        {activityData.map((item) => (
          <div key={item.id} className="skill-row">
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
              <div>
                <div className="skill-name">{item.action}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "2px" }}>{item.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;