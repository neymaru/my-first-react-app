import React from "react";
import ChangeObj from "./ChangeObj실습";

export default function ExampleChangObj() {
  const pororoArr = [
    {
      name: "뽀로로",
      age: 5,
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: 4,
      nickName: "공주님",
    },
    {
      name: "크롱이",
      age: 5,
      nickName: "장난 꾸러기",
    },
  ];

  return (
    <div>
      <ChangeObj objArr={pororoArr} />
    </div>
  );
}
