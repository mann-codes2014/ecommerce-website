import React from 'react';
import styled from "@emotion/styled";
import {urLFor} from "../../lib/client";
import Image from 'next/image'
import {Button} from "../Common/Button";

const StyledDesktopBanner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .heading {
    margin-top: 30px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 35px;
    line-height: 46px;
    letter-spacing: 0.015em;
    color: var(--off-blue);
  }

  .name {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 21px;
    line-height: 28px;
    letter-spacing: 0.015em;
    color: var(--pink);
  }


  .description {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #B7BACB;
  }

  .qualities {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 20px 0;

    span {
      color: #B8B8DC;
      display: flex;
      align-items: center;
    }

  }

  .circle {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    background: rgba(236, 210, 250, 0.35);
    position: absolute;
    top: 0;
    left: 150px;
  }

  .img {
    width: 100%;
    object-fit: fill;
    position: absolute;
    top: -30px;
    left: 100px;
  }
`
export const DiscountBanner = ({data}: any) => {
    const {heading, productImage, productName, productDesc, productQualities, buttonText} = data[0] || {};
    const productImageUrl = urLFor(productImage).url();

    return (
        <div>
            <StyledDesktopBanner>
                <div>
                    <h1 className="heading">{heading}</h1>
                    <p className="name">{productName}</p>
                    <p className="description">{productDesc}</p>
                    <div className="qualities">
                        {productQualities?.map((quality: string, index: number) => <span key={index}>

                            <Image src={'/icons/check.svg'} width={20} height={20} objectFit={'cover'}
                                   alt="Check Icon"/>
                            {quality}</span>)}
                    </div>
                    <Button primary size="large">
                        {buttonText}
                    </Button>
                </div>
                <div style={{position: 'relative', top: 0, left: 0}}>
                    <div className="circle">
                    </div>
                    <div className="img">
                        <Image src={productImageUrl} width={350} height={350} alt="banner product"/>
                    </div>
                </div>
            </StyledDesktopBanner>
        </div>
    );
};

