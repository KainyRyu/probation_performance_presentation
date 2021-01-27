import React from 'react';
import styled from '@emotion/styled';

import Performance1 from '../performnace/Performance1';
import Performance2 from '../performnace/Performance2';
import Performance3 from '../performnace/Performance3';

export default function PerformancePage() {
  return (
    <>
      <Performance>
        <h1>Performance Page</h1>
      </Performance>
      <Performance1 />
      <Performance2 />
      <Performance3 />
    </>
  );
}

const Performance = styled.div`
  background: darkgray;
  border-radius: 30px;
  height: 98%;
  position: relative;
  margin: 0;
  width: 100%;
`;
