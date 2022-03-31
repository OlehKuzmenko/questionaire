import {StyledButtons, StyledContainer} from "./styled";
import {ThemeProvider} from "styled-components";
import {themes} from "../../theme";
import {useState} from "react";

export const Toggle = ({ onChange, currentTheme }) => (
    <StyledButtons>
      <label>
        <input type="radio" name="theme" value="dark" onChange={onChange} defaultChecked={currentTheme === 'dark'} /> Dark
      </label>
      <label>
        <input type="radio" name="theme" value="light" onChange={onChange} defaultChecked={currentTheme === 'light'} /> Light
      </label>
    </StyledButtons>
)

export const ThemeToggle = ({ children, themeName }) => {
  const defaultTheme = themeName === 'dark' ? themes.dark : themes.light;
  const [theme, setTheme] = useState(defaultTheme)

  const onChangeTheme = ({ target }) => {
    setTheme(target.value === 'dark' ? themes.dark : themes.light)
  }

  return (
      <ThemeProvider theme={theme}>
        <StyledContainer>
          {children}
          <Toggle onChange={onChangeTheme} currentTheme={themeName} />
        </StyledContainer>
      </ThemeProvider>
  )
}
