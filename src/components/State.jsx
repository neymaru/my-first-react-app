import React from "react";
import { useState } from "react";

export default function State() {
  // let teacher = "이효석";

  // function inEnglish() {
  //   const spanEl = document.querySelector("#text");
  //   spanEl.innerHTML = "tetz";
  // }
  const [teacher, setTeacher] = useState("이효석");
  return (
    <div>
      <button onClick={() => setTeacher("tetz")}>영어로</button>
      <br />
      <span id="text">{teacher}</span>
    </div>
  );
}
