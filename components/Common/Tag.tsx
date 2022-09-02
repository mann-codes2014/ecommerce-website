import React from 'react';
import styled from "@emotion/styled";


const StyledTag = styled.button`
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  padding: 2px 4px;
  background-color: white;
  border: 1px solid var(--pink);
  color: var(--pink);
  border-radius: 4px;
  margin: 1px;
`
export const Tag = ({label}:{label:string}) => {
    return (
        <StyledTag>
            {label}
        </StyledTag>
    );
};
