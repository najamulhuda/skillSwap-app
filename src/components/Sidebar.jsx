import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">SkillSwap</h2>

      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/add-skill">Add Skill</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
}

export default Sidebar;