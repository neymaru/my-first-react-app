// function MainHeader() {
//   const cas = true;

//   // 컴포넌트는 pascal case 를 써야함
//   return <h1>Hello, {cas ? "카하" : "노맛"} world!</h1>;
// }
// export default MainHeader; // 모듈 빼주기

import { Component } from "react";
class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }

  render() {
    return <h1>Hello, {this.cas ? "카하" : "노맛"} world!</h1>;
  }
}
export default MainHeader;
