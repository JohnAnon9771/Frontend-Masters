import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { css, keyframes } from '@emotion/core';

import colors from './colors';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export default function NavBar() {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        position: sticky;
        top: 0;
        z-index: 10;
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} linear infinite;
          &:hover {
            text-decoration: underline;
          }
        `}
        aria-label="logo"
        role="img"
      >
        🐩
      </span>
    </header>
  );
}
