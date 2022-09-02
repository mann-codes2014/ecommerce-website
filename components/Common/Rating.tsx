import React, {useState} from 'react';
import styled from "@emotion/styled";

interface RatingProps {
    value: number;
    totalRatings?: number;
}

const StyledRating = styled.div`
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &.on {
      color: var(--yellow);
    }

    &.off {
      color: darkgrey;
    }

    .star {
      font-size: 14px;
    }

    .total-ratings {
      font-family: 'Josefin Sans', sans-serif;
      font-size: 14px;
      line-height: 29px;
      text-transform: capitalize;
      color: var(--off-blue);
    }
  }
`

export const Rating = ({
                           value = 0,
                           totalRatings = 0
                       }: RatingProps) => {
    const [rating, setRating] = useState(value);
    const [hover, setHover] = useState(0);
    return (
        <StyledRating>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
            <span className="total-ratings">({totalRatings})</span>
        </StyledRating>
    );
};
