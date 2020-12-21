import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

export default function Timer() {
  const [ends, setEnds] = useState(0);
  const [timeLeft, setTimeLeft] = useState();

  const currentTime = new Date().getTime();

  const timeCal = timeleft => {
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const onClickStart = () => {
    const starts = currentTime;

    starts && setEnds(starts + 1200000);
  };

  setInterval(() => ends && setTimeLeft(timeCal(ends - currentTime)), 1000);

  return (
    <>
      <button onClick={onClickStart}>Start</button>
      <div>
        20min count down : {timeLeft && timeLeft.minutes}:{' '}
        {timeLeft && timeLeft.seconds}
      </div>
    </>
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
