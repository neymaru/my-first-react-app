import React from "react";
import Modal from "./Modal";
import ListChild from "./ListChild실습";
import Map from "./Map실습";

export default function List() {
  // const dataArr = [
  //   {
  //     title: "리액트 공부하기",
  //     todo: "State 사용법 익히기",
  //   },
  //   {
  //     title: "코테 문제 풀기",
  //     todo: "Lv 0 정복 가즈아",
  //   },
  //   {
  //     title: "한강 가기",
  //     todo: "경품 타기",
  //   },
  // ];
  const items = [
    {
      item: "PS5",
      price: "685,000원",
    },
    {
      item: "에어 프라이어",
      price: "50,000원",
    },
    {
      item: "사세 치킨윙",
      price: "11,500원",
    },
  ];
  return (
    // Map실습
    <div>
      {/* 1. 컴포넌트와 props 사용 */}
      {items.map((el, index) => (
        <Map item={el.item} price={el.price} key={index} />
      ))}
      <hr />
      {/* 2. 일반 코드로 그리기 */}
      {items.map((el, index) => (
        <div key={index}>
          <h1>품목명 : {el.item}</h1>
          <p>가격 : {el.price}</p>
        </div>
      ))}
    </div>

    // Map
    // <div>
    //   <h1>오늘 해야할 일</h1>
    //   <Modal />
    //   {dataArr.map(
    //     (el, index) => (
    //       <ListChild title={el.title} todo={el.todo} key={index} />
    //     ) // 반드시 unipue 한 key 값을 넣어줘야 함. 정말 쓸 값이 없으면 index 값 쓰기
    //   )}
    //   {dataArr.map((el, index) => {
    //     return (
    //       <div key={index}>
    //         <hr />
    //         <h2>{el.title}</h2>
    //         <p>{el.todo}</p>
    //       </div>
    //     );
    //   })}
    //   <Modal />
    // </div>

    // ListChild 실습
    // div>
    //   <h1>오늘 해야할 일</h1>
    //   <Modal />
    //   <hr </>
    //   <ListChild title="리액트 공부하기" todo="state 사용법 익히기" />
    //   <hr />
    //   <ListChild title="코테 문제 풀기" todo="Lv 0 정복 가즈아" />
    // </div>
  );
}
