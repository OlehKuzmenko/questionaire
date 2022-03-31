import './App.css';
import {useState} from "react";
import {
    StyledContainer,
    StyledForm,
    StyledInput, StyledInputLabel,
    StyledInputsContainer, StyledQuestionTypography,
    StyledRadioContainer, StyledResultTypography,
    StyledTitle
} from "./styled";
import {ThemeToggle} from "./components/Toggle";

function App() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const isQuestions = questionNumber < 3;
    const [bio, setBio] = useState({
        name: null,
        age: null,
        profession: 'other',
    });

    const handleSubmit = (e) => {
        setQuestionNumber(questionNumber + 1);
        e.preventDefault();
    }
    const handleChange = () => (e) => {
        setBio({
            ...bio,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="App">
            <ThemeToggle themeName='light'>
                {
                    isQuestions ?
                        <StyledContainer>
                            <StyledTitle>Hi, guest!</StyledTitle>
                            <StyledForm onSubmit={handleSubmit}>
                                {
                                    questionNumber === 0 ?
                                        <>
                                            <StyledQuestionTypography>What is your name?</StyledQuestionTypography>
                                            <StyledInput autoComplete='off' required onChange={handleChange()}
                                                         name='name'
                                                         type='text'/>
                                        </>
                                        :
                                        questionNumber === 1 ?
                                            <>
                                                <StyledQuestionTypography>How old are you?</StyledQuestionTypography>
                                                <StyledInput required onChange={handleChange()} name='age' type='number'
                                                             min={18}
                                                             max={60}/>
                                            </>
                                            :
                                            <StyledInputsContainer>
                                                <StyledQuestionTypography>What is your
                                                    profession?</StyledQuestionTypography>
                                                <StyledRadioContainer>
                                                    <input name='profession' type='radio' id='front' value='Front-End'
                                                           onChange={handleChange()}/>
                                                    <StyledInputLabel htmlFor='front'>Front-End</StyledInputLabel>
                                                </StyledRadioContainer>
                                                <StyledRadioContainer>
                                                    <input name='profession' type='radio' id='back' value='Back-End'
                                                           onChange={handleChange()}/>
                                                    <StyledInputLabel htmlFor='back'>Back-End</StyledInputLabel>
                                                </StyledRadioContainer>
                                                <StyledRadioContainer>
                                                    <input
                                                        checked={bio.profession === 'Project Manager'}
                                                        name='profession' type='radio' id='pm'
                                                        value='Project Manager'
                                                        onChange={handleChange()}/>
                                                    <StyledInputLabel htmlFor='pm'>Project Manager</StyledInputLabel>
                                                </StyledRadioContainer>
                                                <StyledRadioContainer>
                                                    <input
                                                        checked={bio.profession === 'QA'}
                                                        name='profession' type='radio' id='qa' value='QA'
                                                        onChange={handleChange()}/>
                                                    <StyledInputLabel htmlFor='qa'>QA</StyledInputLabel>
                                                </StyledRadioContainer>
                                                <StyledRadioContainer>
                                                    <input
                                                        checked={bio.profession === 'DevOps'}
                                                        name='profession' type='radio' id='devops' value='DevOps'
                                                        onChange={handleChange()}/>
                                                    <StyledInputLabel htmlFor='devops'>DevOps</StyledInputLabel>
                                                </StyledRadioContainer>
                                                <StyledRadioContainer>
                                                    <input checked={bio.profession === 'other'}
                                                           name='profession' type='radio' id='other'
                                                           value='other'
                                                           onChange={handleChange()}/>
                                                    <StyledInputLabel htmlFor='other'>other</StyledInputLabel>
                                                </StyledRadioContainer>
                                                <button> Done</button>
                                            </StyledInputsContainer>
                                }
                            </StyledForm>
                        </StyledContainer>
                        :
                        <div>
                            <StyledResultTypography>
                                Hi, {bio.name}!
                            </StyledResultTypography>
                            <StyledResultTypography>
                                You are {bio.age} old
                            </StyledResultTypography>
                            <StyledResultTypography>
                                Your profession is {bio.profession}
                            </StyledResultTypography>
                        </div>
                }
            </ThemeToggle>
        </div>
    );
}

export default App;
