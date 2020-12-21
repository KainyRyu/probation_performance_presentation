import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';

export default function TimeToPresentation() {
  const [dueToDay, setDueToDay] = useState();
  const [dueToTime, setDueToTime] = useState();

  const timeCal = timeleft => {
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const currentTime = new Date().getTime();
  setInterval(function () {
    let countDownDate = new Date('Feb 8, 2021 14:00:00').getTime();

    let timeleft = countDownDate - currentTime;
    let calculated = timeCal(timeleft);

    setDueToDay(calculated.days);
    setDueToTime(
      ` ${calculated.hours}: ${calculated.minutes}: ${calculated.seconds}`
    );
  }, 1000);

  // const timer = useCallback(() => {}, []);

  return (
    <TimerBorder>
      <TimeLeft>{dueToDay}days</TimeLeft>
      <TimeLeft>{dueToTime}</TimeLeft>
    </TimerBorder>
  );
}

const TimerBorder = styled.span`
  align-items: center;
  border: 2px red solid;
  border-radius: 50px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-size: 12px;
  height: 70px;
  width: 70px;
`;
// font-size: 50px;
// height: 300px;
// width: 300px;

const TimeLeft = styled.div`
  color: red;
`;
