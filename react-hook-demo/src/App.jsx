import { useState, useEffect } from "react";

function App() {
  // Counter
  const [count, setCount] = useState(0);

  // Timer
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>⚛️ React Hook Demo</h1>

      {/*Begin: Counter */}
      <section>
        <h2>🔢 Counter</h2>
        <p>Giá trị hiện tại: {count}</p>
        <button onClick={() => setCount(count + 1)}>Tăng</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: 10 }}>
          Giảm
        </button>
      </section>
      {/*End: Counter */}
      <hr />

      {/* Timer */}
      {/* Begin: Timer */}
      <section>
        <h2>⏳ Timer</h2>
        <p>Đã đếm: {seconds} giây</p>
      </section>
      {/* End: Timer */}
    </div>
  );
}

export default App;
