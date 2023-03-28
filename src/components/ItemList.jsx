import React from "react";
import Item from "./Item";

export default function ItemList() {
  const items = [
    {
      item: "PS5",
      price: "685,000",
    },
    {
      item: "에어프라이어",
      price: "50,000",
    },
    {
      item: "사세 치킨윙",
      price: "11,500",
    },
  ];

  return (
    <div>
      {items.map((el, index) => {
        return (
          <div key={index}>
            <h2>품목명 : {el.item}</h2>
            <p>가격 : {el.price}</p>
          </div>
        );
      })}
      {items.map((el, index) => (
        <Item item={el.item} price={el.price} key={el.item} />
      ))}
    </div>
  );
}
