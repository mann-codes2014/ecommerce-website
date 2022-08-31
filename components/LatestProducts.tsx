import React from 'react';
import styled from "@emotion/styled";
import {urLFor} from "../lib/client";
import Image from 'next/image'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  text-align: center;

  .cover {
    background-color: var(--gray-background);
    display: block;
    padding: 50px 5px;
    width: 100%;
    position: relative;
  }

  .text-container {
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h4 {
      font-family: 'Josefin Sans', sans-serif;
      font-style: normal;
      font-weight: 700;
      color: var(--off-blue);
    }

    h4.name {
      font-size: 14px;
      line-height: 16px;
      justify-self: start;
    }

    h4.price {
      font-size: 14px;
      line-height: 16px;
      justify-self: end;
    }
  }

  .action-bar-overlay {
    position: absolute;
    bottom: 30px;
    left: 0;
    transition: .5s ease;
    opacity: 0;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: end;
  }

  &:hover .cover {
    background-color: white;
  }

  &:hover .action-bar-overlay {
    opacity: 1;
  }
`
const StyledAction = styled.div`
  width: 35px;
  text-align: center;
  padding: 5px;

  &:hover {
    background: #e6e8fc;
    border-radius: 50%;
  }
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
        </div>
        <div className="text-container">
            <h4 className="name">Cantilever chair</h4>
            <h4 className="price">$42.00</h4>
        </div>
    </StyledProduct>)
}
export const LatestProducts = ({products}: any) => {

    return (
        <div>
            <StyledHeading>Latest Products</StyledHeading>
            <StyledContainer>
                {products && products?.map((product: any, index: number) => <div key={index}>
                    <Product product={product}/>
                </div>)}
            </StyledContainer>
        </div>
    );
};
