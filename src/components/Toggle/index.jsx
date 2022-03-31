import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledButtons, StyledContainer } from './styled';
import themes from '../../constants/theme';

export function Toggle({ onChange, currentTheme }) {
  return (
    <StyledButtons>
      <label>
        <input type="radio" name="theme" value="dark" onChange={onChange} defaultChecked={currentTheme === 'dark'} />
        {' '}
        Dark
      </label>
      <label>
        <input type="radio" name="theme" value="light" onChange={onChange} defaultChecked={currentTheme === 'light'} />
        {' '}
        Light
      </label>
    </StyledButtons>
  );
}

export function ThemeToggle({ children, themeName }) {
  const defaultTheme = themeName === 'dark' ? themes.dark : themes.light;
  const [theme, setTheme] = useState(defaultTheme);

  const onChangeTheme = ({ target }) => {
    setTheme(target.value === 'dark' ? themes.dark : themes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        {children}
        <Toggle onChange={onChangeTheme} currentTheme={themeName} />
      </StyledContainer>
    </ThemeProvider>
  );
}
