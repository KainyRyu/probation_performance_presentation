import React, { useState } from 'react';
import styled from '@emotion/styled';
import Timer from './Timer';

export default function DueCountdown() {
  const [countDown, setCountDown] = useState(0);

  const timeCalculator = different => {
    return {
      days: Math.floor(different / (1000 * 60 * 60 * 24)),
      hours: Math.floor((different / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((different / 1000 / 60) % 60),
      seconds: Math.floor((different / 1000) % 60)
    };
  };

  const dueDate = new Date('02/03/2021');

  setInterval(() => {
    const timeDiff = dueDate - new Date();
    const timeDiffDetail = timeCalculator(timeDiff);

    setCountDown(timeDiffDetail);
  }, 1000);

  return (
    <TimerBorder>
      <TimeLeft>{countDown.days}days</TimeLeft>
      <TimeLeft>{countDown.hours} hours</TimeLeft>
      <TimeLeft>
        {countDown.minutes}: {countDown.seconds}
      </TimeLeft>
      {/* <TimeLeft>{dueToDay}days</TimeLeft>
      <TimeLeft>{dueToTime}</TimeLeft> */}
    </TimerBorder>
  );
}

const TimerBorder = styled.span`
  align-items: center;
  border: 2px red solid;
  border-radius: 700px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-size: 50px;
  height: 40vw;
  width: 40vw;
`;
// font-size: 50px;
// height: 300px;
// width: 300px;

const TimeLeft = styled.div`
  color: red;
`;
