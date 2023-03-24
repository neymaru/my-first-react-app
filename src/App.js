import "./App.css";
import MainHeader from "./components/MainHeader"; // mainheader 라는 이름으로 컴포넌트 사용 가능
import BtnToNaver from "./components/BtnToNaver";
import ImgComponent from "./components/ImgComponent";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/functionalComponent";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <ImgComponent />
      <BtnToNaver />
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
