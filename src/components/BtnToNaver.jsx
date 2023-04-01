// 함수형 컴포넌트
// function BtnToNaver() {
//   return (
//     <a href="https://www.naver.com" target="_blank">
//       네이버로 이동
//     </a>
//   );
// }

// BtnToNaver 클래스형 컴포넌트
import { Component } from 'react';

class BtnToNaver extends Component {
  render() {
    return (
      <div>
        <a rel="noreferrer" href="https://www.naver.com" target="_blank">
          네이버로 이동
        </a>
      </div>
    );
  }
}

export default BtnToNaver;
