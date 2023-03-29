import { useRef, useState } from 'react';

export default function TesRef() {
  const [text, setText] = useState('안녕하세요!');

  const inputValue = useRef(); //useRef 사용하기 위한 변수 생성

  // 기존 js 로 업데이트 하는 방법
  const onChangeText = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  // useRef 사용해서 업데이트 하는 방법
  const onChangeRef = () => {
    console.log(inputValue);
    setText(inputValue.current.value); // current까지 가야 태그에 도착한 것. 태그 안의 값을 setText 로 업데이트
  };

  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onChangeRef} />
      {/* input 태그에 먼가를 입력하면 onchange 가 반응해서 함수를 호출 */}
    </div>
  );
}
