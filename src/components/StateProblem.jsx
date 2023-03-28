import React, { useState } from "react";

export default function StateProblem() {
  const [state, setState] = useState({ teacher: "이효석" });
  console.log(state);

  return (
    <div>
      {state.teacher}
      <br />
      <button
        onClick={() => {
          state.teacher = "tetz";
          const copyObj = { ...state }; // 전개연산자 사용해서 안에 내용을 동일하게 넣어줌
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로
      </button>
    </div>
  );
}
