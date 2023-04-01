import React, { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

// 방법 1
// export default function PracticeConditional() {
//   const [condition, setCondition] = useState(true);
//   const onChange = () => {
//     setCondition(!condition);
//   };

//   return (
//     <>
//       {condition ? <PracticeOne /> : <PracticeTwo />}
//       <button onClick={onChange}>바꾸자</button>
//     </>
//   );
// }

// 방법 2 (props 사용)
export default function PracticeConditional() {
  const [condition, setCondition] = useState('1번');
  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번');
  };

  return (
    <>
      {condition === '1번' ? (
        <PracticeOne text={condition} />
      ) : (
        <PracticeTwo text={condition} />
      )}
      <button onClick={onChange}>바꾸자</button>
    </>
  );
}
