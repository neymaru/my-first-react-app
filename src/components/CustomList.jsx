import React from "react";

export default function CustomList({ arr }) {
  return (
    <ul>
      {/* ?쓰면 arr 값이 존재할 때만 실행 */}
      {arr?.map((el, idx) => (
        <li key={idx}>{el}</li>
      ))}
    </ul>
  );
}
