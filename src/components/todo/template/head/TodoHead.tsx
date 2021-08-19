import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  // const dayString = "Tuesday";
  // const dateString = "July 20, 2021";
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const time = new Date();
  const dayString = week[time.getDay()];
  const dateString = `${
    month[time.getMonth()]
  } ${time.getDate()}, ${time.getFullYear()}`;

  return (
    <TodoHeadBlock>
      <DayText>{dayString}</DayText>
      <DateText>{dateString}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
