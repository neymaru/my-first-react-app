import React, { useState } from "react";

export default function Emoji실습() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count >= 10 ? "😆" : "👍"}
      </h1>
      <h1>{count}</h1>
    </div>
  );
}
