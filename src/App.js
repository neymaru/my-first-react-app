import "./App.css";
import MainHeader from "./components/MainHeader"; // mainheader 라는 이름으로 컴포넌트 사용 가능
import BtnToNaver from "./components/BtnToNaver";
import ImgComponent from "./components/ImgComponent";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/functionalComponent";
import Inline from "./components/Inline";
import EventHandler from "./components/EventHandler";
import Example1 from "./components/Example1";
import State from "./components/State";
import State2 from "./components/State2";
import Condition from "./components/Condition";
import Emoji실습 from "./components/Emoji실습";
import ClassState from "./components/ClassState";
import StateAndVar from "./components/StateAndVar";
import StateProblem from "./components/StateProblem";
import List from "./components/List";
import PropsHeader from "./components/PropsHeader";
import MultiProps from "./components/MultiProps";
import ClassProps from "./components/ClassProps";
import ListChild실습 from "./components/ListChild실습";
import Map실습 from "./components/Map실습";
import ItemList from "./components/ItemList";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import ExampleChangeObj from "./components/ChangeObj데이터";

function App() {
  // const nameArr = ["뽀로로", "루피", "크롱이"];
  // const pororoObj = {
  //   name: "뽀로로",
  //   age: "5",
  //   nickName: "사고뭉치",
  // };

  return (
    <div className="App">
      {/* <PropsHeader text="Hello, Props World!" />
      <PropsHeader text="Bye, Props World!" />
      <PropsHeader text="Welcome back, Props World!" />
      <MultiProps text={str} href="https://naver.com" userID="tetz" /> */}
      {/* <ClassProps name="뽀로로" age="5" nickName="사고뭉치" /> */}
      {/* <List /> */}
      {/* <ItemList /> */}
      {/* <CustomList />
      <CustomObj /> */}
      <ExampleChangeObj />
    </div>
  );
}

export default App;
