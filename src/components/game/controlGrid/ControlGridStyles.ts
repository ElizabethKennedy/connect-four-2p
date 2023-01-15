import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

// type props = {
//   columnnumber: string;
// };

// type positionsType = {
//   [key: string]: string;
// };

// const positions: positionsType = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   3: 'd',
//   4: 'e',
//   5: 'f',
//   6: 'g',
// };

export const Control = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0 1.7rem;
  gap: 1.8rem;
  height: 100%;
  position: absolute;
  z-index: 6;
  ${media.phone} {
    padding: 0 0.8rem;
    gap: 0.55rem;
  }
`;

export const Column = styled.div`
  width: 7rem;
  cursor: pointer;
  ${media.phone} {
    width: 4.1rem;
  }
`;

