import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (resFetch.status !== 200) return '망했어요';

    const data = await resFetch.json();
    console.log(data);
    setDataArr((cur) => data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataArr.map((el) => {
        return (
          <ProfileComponent
            name={el.name}
            age={el.age}
            nickName={el.nickName}
            key={el.name}
          />
        );
      })}
    </>
  );
}
