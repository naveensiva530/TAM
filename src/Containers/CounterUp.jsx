// counter 
import { useState, useEffect, useRef } from "react";


function Counter({ targetNumber, duration = 1300 }) {
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
        }
      },
      { threshold: 0.5 } // Start when 50% is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasRun]);

  useEffect(() => {
    if (hasRun) {
      const startTime = Date.now();

      function updateCounter() {
        const elapsed = Date.now() - startTime;
        if (elapsed >= duration) {
          setCount(targetNumber);
          return;
        }

        const progress = elapsed / duration;
        setCount(Math.round(progress * targetNumber));

        requestAnimationFrame(updateCounter);
      }

      requestAnimationFrame(updateCounter);
    }
  }, [hasRun, targetNumber, duration]);

  return (
    <div ref={counterRef} style={{ textAlign: "center", padding: "20px" }}>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;
