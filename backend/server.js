const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const quotes = [
    { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
    { text: "You are capable of amazing things.", author: "Unknown" },
    { text: "Every day is a new beginning.", author: "C.S. Lewis" },
    { text: "Keep going, you’re doing great!", author: "Anonymous" },
    { text: "Dream big, work hard, stay humble.", author: "Unknown" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" }
  ];
  

  app.get("/api/quote", (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
  });
  

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  
