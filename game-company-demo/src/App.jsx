import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Import CSS chung
import "./styles/App.css";

function App() {
  return (
    <Router>
      <header>
        <h1>Garena Clone</h1>
        <nav>
          <Link to="/">Trang chủ</Link>
          <Link to="/games">Game</Link>
          <Link to="/about">Giới thiệu</Link>
          <Link to="/contact">Liên hệ</Link>
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
