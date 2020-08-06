import styled from 'styled-components';

import SVGIcon from '../arrow';

import colors from 'styles/colors';

import { WrapperType } from './types';

export const Wrapper = styled.div<WrapperType>`
  display: flex;
  align-items: center;
  transition: color 0.5s;
  user-select: none;
  outline: none;
  margin: 10px;

  p,
  svg {
    cursor: ${props => (props.isClickable ? 'pointer' : 'not-allowed')};
    color: ${props =>
      props.isClickable ? colors.primary.blue : colors.neutral.greyDark};
    fill: ${props =>
      props.isClickable ? colors.primary.blue : colors.neutral.greyDark};
    user-select: none;
    margin: 0;
  }
`;

export const PreviousPageIcon = styled(SVGIcon)`
  height: 25px;
  margin: 0;
`;
