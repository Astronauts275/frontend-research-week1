import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Detail Page</h2>
      <p>User ID: {id}</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default UserDetail;
