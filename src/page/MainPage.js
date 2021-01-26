import React from 'react';
import styled from '@emotion/styled';
import DueCountdown from '../component/DueCountdown';

export default function MainPage() {
  return (
    <div>
      {/* Header */}
      <Contexts>
        <DueCountdown />
        <h1>조아라에서 3개월... </h1>
      </Contexts>
    </div>
  );
}

const Contexts = styled.div`
  color: #333333;
`;
