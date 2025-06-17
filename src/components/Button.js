import { useState} from "react";

function CustomButton() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>
        Plus
      </button>
      <p>Counter: {count}</p>
    </>
  );
}

export default CustomButton;
