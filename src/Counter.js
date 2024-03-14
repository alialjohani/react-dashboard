import React, { useState } from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/slices/counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <section>
      <div>{count}</div>
      <Button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </Button>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <Button
        onClick={() => {
          console.log(`amount=${amount}, typeof amount=${typeof amount}`);
          dispatch(incrementByAmount(amount));
        }}
      >
        +
      </Button>
    </section>
  );
};

export default Counter;
