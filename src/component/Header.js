import React from 'react';
import styled from '@emotion/styled';

import Timer from './Timer';

export default function Header() {
  return (
    <>
      <LinkWrapper>
        <LinkButton>Introduce</LinkButton>

        <LinkButton>Work</LinkButton>

        <LinkButton>Performance</LinkButton>

        <LinkButton>Thank you</LinkButton>

        <LinkButton>Q&A</LinkButton>
      </LinkWrapper>
      <Timer />
    </>
  );
}

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vw;
`;

const LinkButton = styled.div`
  color: #333;
  boder-style: none;
`;
