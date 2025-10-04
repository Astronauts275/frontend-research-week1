import { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/Games.css";

function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    axios.get("/games.json")
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi tải dữ liệu:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>⏳ Đang tải danh sách game...</p>;

  return (
    <div className="games-container">
      <h1>Danh sách Game</h1>
      <div className="games-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.img} alt={game.name} />
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
