import { useNavigate, useLocation } from "react-router-dom";

const pageTitles = {
  "/dashboard": { title: "Dashboard", sub: "Here's what's happening today" },
  "/skills": { title: "Skills", sub: "Browse and manage your skills" },
  "/add-skill": { title: "Add Skill", sub: "Share a new skill with the community" },
  "/profile": { title: "Profile", sub: "Manage your account settings" },
};

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const page = pageTitles[location.pathname] || { title: "SkillSwap", sub: "" };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h3>{page.title}</h3>
        <p>{page.sub}</p>
      </div>
      <div className="navbar-right">
        <button className="notif-btn" title="Notifications">
          🔔
          <span className="notif-dot"></span>
        </button>
        <button className="logout-btn" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;