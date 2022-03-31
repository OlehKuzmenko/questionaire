import React from 'react';
import {
  StyledContainer,
  StyledForm,
  StyledInput, StyledInputLabel,
  StyledInputsContainer,
  StyledQuestionTypography,
  StyledRadioContainer,
  StyledTitle,
} from './styled';
import radioBtns from '../../constants/radioBtns';

function Questions({
  handleSubmit, handleChange, questionNumber, bio,
}) {
  return (
    <StyledContainer>
      <StyledTitle>Hi, guest!</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        {
                    !questionNumber ? (
                      <>
                        <StyledQuestionTypography>What is your name?</StyledQuestionTypography>
                        <StyledInput
                          autoComplete="off"
                          required
                          onChange={handleChange}
                          name="name"
                          type="text"
                        />
                      </>
                    ) : (
                      <>
                        <StyledQuestionTypography>How old are you?</StyledQuestionTypography>
                        <StyledInput
                          required
                          onChange={handleChange}
                          name="age"
                          type="number"
                          min={18}
                          max={60}
                        />
                      </>
                    )
                }
        {
                    questionNumber > 1 && (
                    <StyledInputsContainer>
                      <StyledQuestionTypography>
                        What is your profession?
                      </StyledQuestionTypography>
                      {radioBtns.map((item, index) => (
                        <StyledRadioContainer
                          key={item.id}
                        >
                          <input
                            key={item.id + item.value}
                            name="profession"
                            type="radio"
                            id={item.id + item.value}
                            value={item.value}
                            onChange={handleChange}
                            checked={bio.profession === item.value}
                          />
                          <StyledInputLabel
                            key={item.id + item.value + 1}
                            htmlFor={item.id + index}
                          >
                            {item.value}
                          </StyledInputLabel>
                        </StyledRadioContainer>
                      ))}
                      <button type="submit"> Done</button>
                    </StyledInputsContainer>
                    )
                }
      </StyledForm>
    </StyledContainer>
  );
}

export default Questions;
