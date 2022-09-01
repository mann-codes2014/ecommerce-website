import React from 'react';
import styled from "@emotion/styled";
import {Button} from "./Button";


const StyledInputContainer = styled.div`
  border-radius: 5px;
  padding: 1px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 5px;
  align-items: center;
  background-color: white;
`
const StyledInput = styled.input<any>`
  border: 0;
  outline: none;
  padding-left: 10px;

  &::placeholder {
    color: #8A8FB9;
    font-weight: bold;
  }

`
type InputProps = {
    placeholder?: string;
    buttonLabel: string;
    isPrimaryButton?: boolean
}
export const Input = ({
                          placeholder = 'Enter Email Address',
                          buttonLabel = 'Signup',
                          isPrimaryButton = true
                      }: InputProps) => {
    return (
        <StyledInputContainer>
            <StyledInput type="text" placeholder={placeholder}/>
            <Button size="small" label={buttonLabel} primary={isPrimaryButton}/>
        </StyledInputContainer>
    );
}

export default Input;