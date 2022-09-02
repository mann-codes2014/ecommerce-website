import React from 'react';
import styled from "@emotion/styled";
import {urLFor} from "../lib/client";
import Image from 'next/image'
import {Button} from "./Button";

const StyledDesktopBanner = styled.div`
  background-color: #F2F0FF;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;

  .summary {
    color: #FB2E86;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
  }

  .heading {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 53px;
    line-height: 82px;
    letter-spacing: 0.015em;
    color: #000000;
  }

  .description {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: #8A8FB9;
  }

  .circle1 {
    border-radius: 50%;
    width: 400px;
    height: 400px;
    background: rgba(236, 210, 250, 0.35);

    .img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`
export const HeroBanner = ({data}: any) => {
    const {image, productImage, summary, heading, desc, buttonText} = data[0] || {};
    const productImageUrl = urLFor(productImage).width(400).url();
    const imageUrl = urLFor(image).width(300).url();

    return (
        <div>
            <StyledDesktopBanner>
                <div>
                    <Image src={imageUrl} width={300} height={300} alt="lamp"/>
                </div>
                <div>
                    <p className="summary">{summary}</p>
                    <h1 className="heading">{heading}</h1>
                    <p className="description">{desc}</p>
                    <Button primary size="large">
                        {buttonText}
                    </Button>
                </div>
                <div>
                    <div className="circle1">
                        <Image src={productImageUrl} width={400} height={400} alt="banner product"/>
                    </div>
                </div>
            </StyledDesktopBanner>
        </div>
    );
};

