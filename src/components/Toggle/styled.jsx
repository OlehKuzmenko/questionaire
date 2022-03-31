import styled from 'styled-components';

export const StyledButtons = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  color: ${props => props.theme.textColor};
`;

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.bgColor};
  padding-top: 10vh;
`;