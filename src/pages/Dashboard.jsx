import Card from "../components/Card";

function Dashboard() {
  return (
    <div className="dashboard-grid">
      <Card>
        <h3>Total Skills</h3>
        <p>12</p>
      </Card>
      <Card>
        <h3>Requests Sent</h3>
        <p>5</p>
      </Card>
      <Card>
        <h3>Requests Received</h3>
        <p>3</p>
      </Card>
    </div>
  );
}

export default Dashboard;