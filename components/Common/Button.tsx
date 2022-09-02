import React, {ReactNode} from 'react';
import styled from '@emotion/styled'

interface ButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    children: ReactNode
}

interface StyledButtonProps {
    primary: boolean
    size: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<StyledButtonProps>`
  font-family: 'Josefin Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  color: #EEEFFB;
  border: 3px solid white;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  background-color: ${props => (props.primary ? 'var(--pink)' : 'var(--blue)')};
  font-size: ${props => (props.size === 'large' ? '16px' : props.size === 'medium' ? '14px' : '12px')};
  padding: ${props => (props.size === 'large' ? '12px 24px' : props.size === 'medium' ? '11px 20px' : '8px 14px')};

  &:hover {
    border: 3px solid ${props => (props.primary ? 'var(--pink)' : 'var(--blue)')};
    background-color: white;
    color: ${props => (props.primary ? 'var(--pink)' : 'var(--blue)')};
    transition: background-color 350ms;
  }
`
export const Button = (props: ButtonProps) => {
    const {
        primary = false,
        size = 'medium',
        onClick = () => {
        },
        children
    } = props;
    return (
        <StyledButton
            type="button"
            primary={primary}
            size={size}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};
