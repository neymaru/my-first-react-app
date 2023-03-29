import React, { useRef } from 'react';

export default function UseRef실습() {
  const inputEl = useRef();
  const divEl = useRef();

  const changeColor = () => {
    divEl.current.style.backgroundColor = inputEl.current.value;
  };

  return (
    <div ref={divEl}>
      <input ref={inputEl} type="text" />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
