import React, { useState, useEffect } from "react";
import "./Activity2.css";

const ActivityExplanation = () => {
  const [highlightIndex, setHighlightIndex] = useState(null);

  // Simulate highlighting the "stranger" element after 2 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setHighlightIndex(3); // Index of the "stranger" element
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);
useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex(null); // Reset to start the animation again
      setTimeout(() => {
        setHighlightIndex(3); // Highlight the "stranger" element after a delay
      }, 2000);
    }, 5000); // Repeat every 5 seconds
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  

  return (
    <div className="activity2-container">
      <h2>Can you find the stranger?</h2>
      <div className="list-animation">
        {[42, 42, 42, "banana", 42].map((item, index) => (
          <div
            key={index}
            className={`list-item ${
              highlightIndex === index ? "highlight" : ""
            }`}
          >
            {Array.isArray(item) ? `[${item.join(", ")}]` : item.toString()}
          </div>
        ))}
      </div>
      {highlightIndex !== null && (
        <div className="result">
          The stranger is: <span className="stranger">"banana"</span>!
        </div>
      )}
    </div>
  );
};

export default ActivityExplanation;
