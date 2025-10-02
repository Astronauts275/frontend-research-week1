import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToUser = () => {
    navigate("/user/123");
  };

  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <button onClick={goToUser}>Go to User 123</button>
      </nav>
    </div>
  );
}

export default Home;
