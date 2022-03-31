import React from 'react';
import StyledResultTypography from './styled';

function Result({ bio }) {
  return (
    <div>
      <StyledResultTypography>
        Hi,
        {' '}
        {bio.name}
        !
      </StyledResultTypography>
      <StyledResultTypography>
        You are
        {' '}
        {bio.age}
        {' '}
        old
      </StyledResultTypography>
      <StyledResultTypography>
        Your profession is
        {' '}
        {bio.profession}
      </StyledResultTypography>
    </div>
  );
}

export default Result;
