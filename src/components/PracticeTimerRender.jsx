import React, { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function PracticeTimerRender() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <PracticeTimer />}
      {/* <button onClick={show}>{showTimer ? '숨기기' : '보이기'}</button> */}
      <button onClick={() => setShow((cur) => !cur)}>
        {show ? '숨기기' : '보이기'}
      </button>
    </>
  );
}
