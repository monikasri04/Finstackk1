import { Link } from "react-router-dom";
import Button from "@mui/material/Button"

function Home() {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <div className="home-buttons">
        <Link to="/employees">
          <Button variant="contained">Employees</Button>
        </Link>

        <Link to="/cards">
          <Button variant="contained">Cards</Button>
        </Link>

        <Link to="/comments">
          <Button variant="contained">Comments</Button>
        </Link>

        <Link to="/news">
          <Button variant="contained">News</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;