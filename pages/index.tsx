import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../store2/counter";

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  return (
    <>
      <h2>The current number is</h2>

      <h1> {count}</h1>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  );
}
