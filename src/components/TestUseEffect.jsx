import React, { useEffect, useRef, useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요');
  const inputValue = useRef();

  const onBtnClick = () => {
    console.log('마우스 버튼 클릭');
    setCount((cur) => cur + 1);
  };

  const onInputChange = () => {
    console.log('키 입력');
    setText(inputValue.current.value);
  };
  console.log('랜더링 할 때마다 실행되는 useEffect');
  // useEffect(function () {
  //   // useEffect 익명함수는 마운트 될 떄, 컴포넌트가 업데이트 될 때 무조건 실행
  //   console.log('랜더링 할 때마다 실행되는 useEffect');
  // });

  useEffect(() => {
    console.log('마우스 클릭 시에만 실행되는 useEffect');
  }, [count]);

  useEffect(() => {
    console.log('input태그를 변경할 때만 실행되는 useEffect');
  }, [text]);

  useEffect(() => {
    console.log('최초 마운트 시에만 실행');
  }, []); // 빈 의존성 배열

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>+1 버튼</button>
      <br />
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange} type="text" />
    </>
  );
}
