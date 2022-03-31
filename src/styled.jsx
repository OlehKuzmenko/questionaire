import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid ${props => props.theme.borderColor};
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  padding: 30px
`;

export const StyledTitle = styled.h1`
  font-family: roboto, serif;
  color: ${props => props.theme.textColor}
`;

export const StyledInput = styled.input`
  width: 50%;
  background-color: ${props => props.theme.inputBgColor};
  color: ${props => props.theme.textColor};
`;

export const StyledInputLabel = styled.label`
  color: ${props => props.theme.textColor};
`;

export const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRadioContainer = styled.div`
  display: flex;
  padding-left: 40%;
  margin-bottom: 20px;
`;

export const StyledQuestionTypography = styled.p`
  font-family: roboto, serif;
  font-size: 24px;
  color: ${props => props.theme.textColor}
`;

export const StyledResultTypography = styled(StyledQuestionTypography)``;