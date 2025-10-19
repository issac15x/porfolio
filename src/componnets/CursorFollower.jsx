import { useEffect, useRef } from "react";
import { Snowflake } from "lucide-react"; // you can use any icon

export default function SnowyCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] text-cyan-300"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <Snowflake
        size={24}
        strokeWidth={1.5}
        className="drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
      />
    </div>
  );
}
