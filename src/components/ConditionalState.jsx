import React, { useState } from 'react';
import ConditionalRender from './ConditionalRender';

export default function ConditionalState() {
  const [condition, setCondition] = useState('보이기');

  const onChange = () => {
    condition === '보이기' ? setCondition('감추기') : setCondition('보이기');
  };

  const conditionalRender = condition === '감추기' && <ConditionalRender />;

  return (
    <>
      {/* 앞이 true 이면 보여주고 false 이면 안보여준다. */}
      {/* {condition === '감추기' && <ConditionalRender />} */}
      {conditionalRender}
      <button onClick={onChange}>{condition}</button>
      {conditionalRender}
    </>
  );
}
