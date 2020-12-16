import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';

export default function Timer() {
  // const [currentTime, setCurrentTime] = useState();
  const newDate = new Date();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();
  const milliseconds = newDate.getMilliseconds();

  const currentTime = useMemo(
    () => `${hour}${minutes}${seconds}${milliseconds}`,
    []
  );

  console.log(currentTime);
  console.log(hour);
  // console.log(newDate.getMilliseconds());

  return (
    <div>
      <TimeBar>
        <Overlay />
      </TimeBar>
    </div>
  );
}

const TimeBar = styled.div`
  border: solid 1px black;
  width: 30vw;
`;

const Overlay = styled.div`
  display: block;
`;
