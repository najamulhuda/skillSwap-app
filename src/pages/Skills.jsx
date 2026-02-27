import { skillsData } from "../data/dummydata";
import Card from "../components/Card";

function Skills() {
  return (
    <div>
      <h2>All Skills</h2>
      {skillsData.map((skill) => (
        <Card key={skill.id}>
          <h4>{skill.name}</h4>
          <p>Type: {skill.type}</p>
        </Card>
      ))}
    </div>
  );
}

export default Skills;