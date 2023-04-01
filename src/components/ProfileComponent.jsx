import React from 'react';

export default function ProfileComponent({ name, age, nickName }) {
  return (
    <div>
      <h1>이름 : {name}</h1>
      <h2>나이 : {age}</h2>
      <h2>별명 : {nickName}</h2>
      <hr />
    </div>
  );
}
