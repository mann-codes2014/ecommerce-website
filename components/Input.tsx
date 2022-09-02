import React, {ReactNode} from 'react';
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

const StyledBorderInputContainer = styled.div`
  border: 1px solid var(--border);
  border-radius: 5px;
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 5px;
  align-items: center;
  background-color: white;
`
const StyledBorderInput = styled.input<any>`
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
    buttonLabel: ReactNode;
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
            <Button size="small" primary={isPrimaryButton}>
                {buttonLabel}
            </Button>
        </StyledInputContainer>
    );
}
export const BorderInput = ({
                                placeholder = 'Enter Email Address',
                                buttonLabel = 'Signup',
                                isPrimaryButton = true
                            }: InputProps) => {
    return (
        <StyledBorderInputContainer>
            <StyledBorderInput type="text" placeholder={placeholder}/>
            <Button size="small" primary={isPrimaryButton}>
                {buttonLabel}
            </Button>
        </StyledBorderInputContainer>
    );
}
