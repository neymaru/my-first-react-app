import woojoo from "../images/woojoo.jpg";

// 함수형 컴포넌트
// function ImgComponent() {
//   return <img src={woojoo} alt="이미지" />;
// }

// export default ImgComponent;

// ImgComponent 클래스형 컴포넌트
import { Component } from "react";

class ImgComponent extends Component {
  render() {
    return <img src={woojoo} alt="이미지" width="30%" />;
  }
}

export default ImgComponent;
