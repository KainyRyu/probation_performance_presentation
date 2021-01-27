import React from 'react';
import styled from '@emotion/styled';

import Work1 from '../work/Work1';
import Work2 from '../work/Work2';
import Work3 from '../work/Work3';

export default function WorkPage() {
  return (
    <>
      <Work>
        <h1>Work Page</h1>
      </Work>
      <Work1 />
      <Work2 />
      <Work3 />
    </>
  );
}

const Work = styled.div`
  background: darkgray;
  border-radius: 30px;
  height: 98%;
  position: relative;
  margin: 0;
  width: 100%;
`;
