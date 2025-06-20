import { useState } from 'react';

const CustomButton = ({ day }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Plus</button>
      <p>Counter: {count}</p>
      <span>Current day: {day}</span>
    </>
  );
};

export default CustomButton;
