import { useEffect, useState } from "react";
import "../index.css";

export default function Snowfall() {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const count = 50; // number of snowflakes
    const newFlakes = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // %
      size: Math.random() * 1.5 + 0.5, // em
      duration: Math.random() * 5 + 5, // sec
      delay: Math.random() * 10, // sec
    }));
    setFlakes(newFlakes);
  }, []);

  return (
    <>
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}em`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          ❅
        </div>
      ))}
    </>
  );
}
