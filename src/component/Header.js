import React from 'react';
import styled from '@emotion/styled';

import Timer from './Timer';

export default function Header() {
  return (
    <HeaderWrapper>
      <LinkWrapper>
        <LinkButton href="/">Introduce</LinkButton>

        <LinkButton href="/">Work</LinkButton>

        <LinkButton href="/">Performance</LinkButton>

        <LinkButton href="/">Thank you</LinkButton>

        <LinkButton href="/">Q&A</LinkButton>
      </LinkWrapper>
      <Timer />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40vw;
`;

const LinkButton = styled.a`
  boder-style: none;
  color: #333;
  font-size: 30px;
`;
