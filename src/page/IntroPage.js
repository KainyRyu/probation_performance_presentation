import React from 'react';
import Intro1 from '../intro/Intro1';
import Intro2 from '../intro/Intro2';
import Intro3 from '../intro/Intro3';
import styled from '@emotion/styled';

export default function IntroPage() {
  return (
    <>
      <Intro>
        <h1>Intro Page</h1>
      </Intro>
      <Intro1 />
      <Intro2 />
      <Intro3 />
    </>
  );
}

const Intro = styled.div`
  background: darkgray;
  border-radius: 30px;
  height: 98%;
  position: relative;
  margin: 0;
  width: 100%;
`;
