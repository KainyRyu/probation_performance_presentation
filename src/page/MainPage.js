import React from 'react';
import styled from '@emotion/styled';

export default function MainPage() {
  return (
    <Main>
      {/* <DueCountdown /> */}
      <Heading>Kainy's Provation Presentation</Heading>
      <Heading>3 Months in Joara </Heading>
    </Main>
  );
}

const Main = styled.div`
  background: gray;
  border-radius: 30px;
  color: #333333;
  height: 95vh;
  width: 100%;
  position: relative;
`;

const Heading = styled.h1`
  position: relative;
`;
