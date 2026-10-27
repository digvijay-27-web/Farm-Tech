import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api";

function App() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((response) => response.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Backend is not connected yet."));
  }, []);

  return (
    <main className="app">
      <nav className="navbar">
        <div className="brand">🌾 FARM-TECH</div>
        <div className="nav-links">
          <span>Marketplace</span>
          <span>AI Assistant</span>
          <span>Profile</span>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">SMART FARMER PLATFORM</p>
        <h1>Connect. Farm. Trade. Grow.</h1>
        <p>
          FARM-TECH brings agricultural resources and AI-powered farming
          guidance together in one platform.
        </p>
        <button>Explore Marketplace</button>
      </section>

      <section className="status-card">
        <strong>Development status</strong>
        <p>{status}</p>
      </section>
    </main>
  );
}

export default App;
