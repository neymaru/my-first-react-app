import React, { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행 중');
    }, 1000);
    return () => {
      // setInterval을 실행한 변수를 담아주면 종료
      console.log('컴포넌트 언마운트, 타이머가 종료 됩니다.');
      clearInterval(timer);
    };
  }, []);
  return <div>타이머 실행 중</div>;
}
