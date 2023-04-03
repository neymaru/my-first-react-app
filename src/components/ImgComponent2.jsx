import React from 'react';
import woojooImg from '../images/woojoo.jpg';

export default function ImgComponent2() {
  return (
    <>
      <h1>퍼블릭 폴더</h1>
      <img src="/images/woojoo.jpg" alt="퍼블릭 우주" />
      <h1>SRC 폴더</h1>
      <img src={woojooImg} alt="소스 우주" />
    </>
  );
}
