import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/dashboard", icon: "⬡", label: "Dashboard" },
  { to: "/skills", icon: "◈", label: "Skills" },
  { to: "/add-skill", icon: "⊕", label: "Add Skill" },
  { to: "/profile", icon: "◉", label: "Profile" },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-text">SkillSwap</div>
        <div className="logo-sub">Exchange · Grow · Connect</div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ to, icon, label }) => (
          <NavLink key={to} to={to}>
            <span className="nav-icon">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="avatar">N</div>
          <div className="user-info">
            <div className="name">Najam Ul Huda</div>
            <div className="role">Skill Trader</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;