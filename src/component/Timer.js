import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

export default function Timer() {
  const [startTime, setStartTime] = useState(0);
  const [timeInText, setTimeInText] = useState('00 : 00');
  const [leftSeconds, setLeftSeconds] = useState(0);

  // Starting time
  const onClick = useCallback(() => {
    setStartTime(dayjs().format('mm : ss'));
    setLeftSeconds(
      dayjs(startTime, 'mm : ss')
        .add(20, 'minute')
        .diff(dayjs(startTime, 'mm : ss'), 'second')
    );
  }, [startTime]);

  useEffect(() => {
    const minutes = Math.floor(leftSeconds / 60);
    const seconds = Math.floor(leftSeconds - minutes * 60);
    setTimeInText(`${minutes}: ${seconds}`);
  }, [setTimeInText, leftSeconds]);

  useInterval(() => {
    if (leftSeconds > 0) {
      setLeftSeconds(leftSeconds - 1);
    }
  }, 1000);

  return (
    <TimerWrapper>
      {!startTime ? (
        <button onClick={onClick}>Start</button>
      ) : (
        <ShowTime>{timeInText}</ShowTime>
      )}
    </TimerWrapper>
  );
}

const ShowTime = styled.div`
  border: black 1px solid;
  font-size: 20px;
  text-align: center;
  width: 80px;
`;

const TimerWrapper = styled.div`
  align-self: center;
`;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
