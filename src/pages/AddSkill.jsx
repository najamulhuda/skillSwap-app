import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function AddSkill() {
  const [skill, setSkill] = useState("");

  const handleAdd = () => {
    alert("Skill Added (Backend will be connected later)");
    setSkill("");
  };

  return (
    <div>
      <h2>Add Skill</h2>
      <Input
        type="text"
        placeholder="Enter skill name"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <Button text="Add Skill" onClick={handleAdd} />
    </div>
  );
}

export default AddSkill;