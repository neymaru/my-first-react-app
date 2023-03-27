import React from "react";
import { useState } from "react";

export default function State2() {
  const [strState, setStrState] = useState("init");

  function changeState() {
    strState += "-";
    console.log(strState);
  }

  function customSetStrState() {
    setStrState("변경 됨");
  }

  return (
    <div>
      <button onClick={() => setStrState(strState + "+")}>리랜더링 반복!</button>
      <button onClick={customSetStrState}>커스텀 함수 호출</button>
      <button onClick={() => changeState()}>스테이트 강제 변경!</button>
      <br />
      <span>{strState}</span>
    </div>
  );
}
