import React from "react";

export default function ListChild({ title, todo }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{todo}</p>
    </div>
  );
}
