import type {GetServerSideProps} from 'next'
import {client} from "../../lib/client";
import Head from "next/head";
import styled from "@emotion/styled";
import {Button, Rating, Tag, WishlistToggle} from "../../components";
import React from "react";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #FFFFFF;
  box-shadow: 0 0 25px 10px #F6F4FD;
  border-radius: 2px;
  padding: 10px;
`
const StyledProductDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-family: 'Josefin Sans', sans-serif;

  .name {
    font-size: 36px;
    line-height: 42px;
    text-align: left;
    color: #0D134E;
  }

  .price {
    font-size: 16px;
    line-height: 29px;
    text-transform: capitalize;
    color: #151875;
  }

  .description {
    font-size: 14px;
    line-height: 29px;
    color: #A9ACC6;
  }

  .categories {
    font-size: 16px;
    line-height: 29px;
    color: var(--off-blue);
    font-weight: 500;
  }

  .tags {
    font-size: 16px;
    line-height: 29px;
    color: var(--off-blue);
    font-weight: 500;
  }
`
export const getServerSideProps: GetServerSideProps = async () => {
    const productsQuery = `*[_type == "product"]`
    const productsData = await client.fetch(productsQuery);

    const bannerQuery = `*[_type == "banner"]`
    const bannerData = await client.fetch(bannerQuery);

    const latestProductsQuery = `*[_type == "latestProduct"]`
    const latestProductsData = await client.fetch(latestProductsQuery);

    const discountQuery = `*[_type == "discount"]`
    const discountData = await client.fetch(discountQuery);
    return {
        props: {productsData, bannerData, latestProductsData, discountData}
    }
}

const ProductDetails = () => {
    return (
        <>
            <Head>
                <title>Hekto- Product Details</title>
            </Head>
            <div style={{padding: '5%'}}>
                <StyledContainer>
                    <StyledProductDetails>
                        <h3 className="name">Playwood arm chair</h3>
                        <Rating value={4} totalRatings={22}/>
                        <span className="price">$32.00</span>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            tellus
                            porttitor purus, et volutpat
                            sit.</p>
                        <div>
                            <Button primary>Add to Cart</Button>
                            <WishlistToggle filled={true}/>
                        </div>
                        <div className="categories">Categories:
                            <Tag label="Furniture"/>
                        </div>
                        <div className="tags">Tags:
                            <Tag label="Furniture"/>
                            <Tag label="Comfort"/>
                            <Tag label="Sofas"/>
                        </div>
                    </StyledProductDetails>
                </StyledContainer>
            </div>
        </>
    )
}

export default ProductDetails
