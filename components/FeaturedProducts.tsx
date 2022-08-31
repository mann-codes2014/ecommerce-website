import React from 'react';
import styled from "@emotion/styled";
import {urLFor} from "../lib/client";
import Image from 'next/image'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  grid-auto-rows: 1fr;
`
const StyledHeading = styled.h2`
  margin: 15px;
  color: var(--navy-blue);
  font-family: 'Josefin Sans', sans-serif;
  font-size: 38px;
  line-height: 45px;
  text-align: center;
`
const StyledProduct = styled.div`
  //width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;

  .cover {
    background-color: var(--gray-background);
    display: block;
    padding: 50px 5px;
    width: 100%;
    position: relative;
  }

  .text-container {
    padding: 20px;

    h4 {
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 19px;
      line-height: 25px;
      color: var(--pink);
    }

    h5 {
      font-family: 'Josefin Sans', sans-serif;
      font-size: 14px;
      font-weight: 300;
      line-height: 23px;
      color: var(--off-blue);
    }

    h6 {
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 23px;
      color: var(--off-blue);
    }
  }

  &:hover {
    .text-container {
      background-color: var(--blue);

      h4 {
        color: white;
      }

      h5 {
        color: white;
      }

      h6 {
        color: white;
      }
    }
  }

  .action-bar-overlay {
    position: absolute;
    top: 0;
    left: 0;
    transition: .5s ease;
    opacity: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .details-button-overlay {
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    transition: .5s ease;
    opacity: 0;
    color: white;
    font-size: 20px;
    padding: 20px;
    text-align: center;
  }

  /* When you mouse over the container, fade in the details-button-overlay title */

  &:hover .details-button-overlay {
    opacity: 1;
  }

  &:hover .action-bar-overlay {
    opacity: 1;
  }
`
const StyledAction = styled.div`
  width: 35px;
  height: 35px;
  margin: 1em auto;
  text-align: center;
  padding: 5px;

  &:hover {
    background: #e6e8fc;
    border-radius: 50%;
  }
`
const StyledButton = styled.button`
  background: var(--green);
  border-radius: 2px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  border: 0;
  padding: 7px;
`
const Product = ({product}: any) => {
    const {image} = product || {};
    const imageSrc = urLFor(image[0]).url();
    return (<StyledProduct>
        <div className="cover">
            <Image src={imageSrc} width={200} height={200} layout="intrinsic"
                   alt="Cover Image of Product" objectFit="cover"/>
            <div className="action-bar-overlay">
                <StyledAction>
                    <Image src="/icons/cart.svg" alt="cart icon" width={35} height={35} layout="responsive"/>
                </StyledAction>
                <StyledAction>
                    <Image src="/icons/heart.svg" alt="wishlist icon" width={35} height={35} layout="responsive"/>
                </StyledAction>
                <StyledAction>
                    <Image src="/icons/zoom.svg" alt="zoom icon" width={35} height={35} layout="responsive"/>
                </StyledAction>
            </div>
            <div className="details-button-overlay">
                <StyledButton>View Details</StyledButton>
            </div>
        </div>
        <div className="text-container">
            <h4>Cantilever chair</h4>
            <h5>Code - Y523201</h5>
            <h6>$42.00</h6>
        </div>
    </StyledProduct>)
}
export const FeaturedProducts = ({products}: any) => {

    return (
        <div>
            <StyledHeading>Featured Products</StyledHeading>
            <StyledContainer>
                {products && products?.map((product: any, index: number) => <div key={index}>
                    <Product product={product}/>
                </div>)}
            </StyledContainer>
        </div>
    );
};

