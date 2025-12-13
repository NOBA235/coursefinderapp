
import { useState, useEffect } from 'react';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.quotable.io/random?tags=education|learning|motivation');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      // Fallback quotes default just incase api fails
      const fallbackQuotes = [
        { content: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
        { content: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
        { content: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" }
      ];
      const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      setQuote(randomQuote.content);
      setAuthor(randomQuote.author);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="quote-icon-bg">"</div>
      <h3>💡 Daily Inspiration</h3>
      
      {loading ? (
        <p>Loading inspiration...</p>
      ) : (
        <>
          <blockquote className="quote-text">
            "{quote}"
          </blockquote>
          <cite className="quote-author">— {author}</cite>
        </>
      )}
      
      <button 
        className="refresh-btn"
        onClick={fetchQuote}
        disabled={loading}
      >
        {loading ? 'Refreshing...' : 'Load Quote'}
      </button>
    </>
  );
};

export default MotivationalQuote;