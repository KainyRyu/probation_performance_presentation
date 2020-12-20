import React, { useState } from 'react';
import styled from '@emotion/styled';

export default function Timer() {
  const [dueDay, setDueDay] = useState();
  const [dueTime, setDueTime] = useState();

  setInterval(function () {
    let countDownDate = new Date('Feb 8, 2021 14:00:00').getTime();
    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setDueDay(days);
    setDueTime(` ${hours}: ${minutes}: ${seconds}`);
  }, 1000);

  return (
    <div>
      <TimeBar>
        <Overlay />
      </TimeBar>
      <StartBtn>START!</StartBtn>
      <TimerBorder>
        <TimeLeft>{dueDay}days</TimeLeft>
        <TimeLeft>{dueTime}</TimeLeft>
      </TimerBorder>
    </div>
  );
}

const TimeBar = styled.div`
  border: solid 1px black;
  height: 30px;
  width: 30vw;
`;

const Overlay = styled.div`
  background: dodgerblue;
  position: absolute;
  height: 20px;
  width: 20px;
`;

const StartBtn = styled.button`
  background: white;
  border: black 1px solid;
`;

const TimerBorder = styled.span`
  align-items: center;
  border: 2px red solid;
  border-radius: 200px;
  display: flex;
  flex-flow: column;
  font-size: 50px;
  justify-content: center;
  height: 300px;
  width: 300px;
`;

const TimeLeft = styled.div`
  color: red;
`;
