import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://quoteforge.onrender.com/api/quote");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setQuote(data.quote);
    } catch (err) {
      setError("⚠️ Unable to fetch quote. Please try again.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={`app-container ${isDark ? "dark" : ""}`}>
      <button className="toggle-theme" onClick={() => setIsDark(!isDark)}>
        {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>💬 QuoteForge</h1>

      <div className="quote-box fade-in">
        {loading ? (
          <p className="loading">✨ Getting inspired...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <>
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">— {quote.author}</p>
          </>
        )}
      </div>

      <button className="quote-btn" onClick={fetchQuote} disabled={loading}>
        {loading ? "⏳ Loading..." : "✨ Get New Quote"}
      </button>

      <footer className="footer">
        Created with ❤️ by Ayan Ibrahim
      </footer>
    </div>
  );
}

export default App;
