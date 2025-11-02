import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({ text: "Loading...", author: "" });
  const [fade, setFade] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  const fetchQuote = async () => {
    try {
      setFade(false);
      const res = await fetch("http://localhost:4000/api/quote");
      const data = await res.json();
      setQuote(data.quote);
      setTimeout(() => setFade(true), 100);
    } catch (error) {
      setQuote({ text: "Error fetching quote 😞", author: "" });
      console.error(error);
    }
  };

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <button className="toggle-theme" onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>💬 QuoteForge</h1>

      <div className={`quote-container ${fade ? "fade-in" : ""}`}>
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">– {quote.author}</p>
      </div>

      <button className="quote-btn" onClick={fetchQuote}>
        ✨ Get New Quote
      </button>

      <div className="footer">Created with ❤️ by Ayan Ibrahim</div>
    </div>
  );
}

export default App;
