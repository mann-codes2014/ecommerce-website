import React, {useState} from 'react';
import styled from "@emotion/styled";
import {BsHeart, BsHeartFill} from "react-icons/bs";


const StyledAction = styled.button`
  width: 40px;
  height: 40px;
  display: inline-block;
  text-align: center;
  padding: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #eae2e4;
    border-radius: 50%;
  }
`
export const WishlistToggle = ({filled}: { filled: boolean }) => {
    const [hover, setHover] = useState(filled);

    return (
        <StyledAction onMouseEnter={() => setHover(!filled)}
                      onMouseLeave={() => setHover(filled)}>
            {hover ? <BsHeartFill color={'#FB2E86'}/> : <BsHeart/>}
        </StyledAction>
    );
};
