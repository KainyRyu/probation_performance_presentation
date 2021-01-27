import React from 'react';
import styled from '@emotion/styled';

export default function Intro1() {
  return (
    <Intro>
      <h1>Intro 1</h1>
    </Intro>
  );
}

const Intro = styled.div`
  background: lightgray;
  border-radius: 30px;
  height: 98%;
  position: relative;
  margin: 0;
  width: 100%;
`;
