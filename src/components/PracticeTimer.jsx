import React, { useEffect, useState, useRef } from 'react';

export default function PracticeTimer() {
  const [render, setRender] = useState(false); // 시간은 클릭할 때만 뜨면 되니까 state를 잡을 필요 없고 컴포넌트를 리랜더 시켜주는 용도로 사용
  const time = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      time.current++; // 시간은 time.current 에 저장
      console.log(time.current);
    }, 1000);

    // return은 언마운트 될 때 실행 될 코드
    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    };
  }, []); // 마운트 될 때 한번만 실행되기 위해서 빈 배열

  return (
    <>
      {/* useRef은 리랜더링 될 때 까지 값이 변해도 티를 내지 않는다. 그래서 버튼을 통해 리랜더링 시킨다. */}
      <h1>{time.current}</h1>
      <button
        onClick={() => {
          setRender((cur) => !cur);
        }}
      >
        시간
      </button>
    </>
  );
}
