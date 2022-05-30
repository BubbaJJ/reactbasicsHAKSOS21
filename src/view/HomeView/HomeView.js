import { useState, useEffect } from "react";

export const HomeView = () => {
  const [count, setCount] = useState(1); // count = lagrar värdet. setCount = uppdaterer det lagrade värdet.

  useEffect(() => {
    console.log("Welcome!"); // När sidan laddas första gången.
    return () => {
      console.log("Goodbye!"); // När vi lämnar sidan.
    };
  }, []); // Säkerställer att vi bara kör funktionen en gång.

  useEffect(() => {
    console.log("Welcome!"); // När sidan laddas första gången.
    return () => {
      console.log("Goodbye!"); // När vi lämnar sidan.
    };
  }, [count]); // Triggas när count uppdateras.

  return (
    <div>
      <h1>HomeView</h1>
      {/* <h2>Count is: {count}</h2>
      <button onClick={() => setCount(5)}>5</button> Ändrar count till 5 */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>
    </div>
  );
};
