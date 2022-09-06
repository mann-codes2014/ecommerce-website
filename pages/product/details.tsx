import type {GetServerSideProps} from 'next'
import {client} from "../../lib/client";
import Head from "next/head";
import styled from "@emotion/styled";
import {Button, Rating, Tag, WishlistToggle} from "../../components";
import React, {useState} from "react";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #FFFFFF;
  box-shadow: 0 0 25px 10px #F6F4FD;
  border-radius: 2px;
  padding: 10px;
`
const StyledGallery = styled.div`
  display: grid;
  grid-template-areas: 'slide-1 main main main'
                        'slide-2 main main main'
                        'slide-3 main main main';
  gap: 5px;

  .slide-1 {
    grid-area: slide-1;
  }

  .slide-2 {
    grid-area: slide-2;

  }

  .slide-3 {
    grid-area: slide-3;
  }

  .main {
    grid-area: main
  }
`
type StyledImageCardProps = {
    image: string;
    width: string;
    height: string;
    selected?: boolean
}
const StyledImageCard = styled.div<StyledImageCardProps>`
  border: ${props => (props.selected ? '2px solid pink' : 'none')};
  border-radius: 3px;
  background-image: url(${props => (props.image)});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: ${props => (props.width)};
  height: ${props => (props.height)};
  object-fit: contain;
  object-position: center;
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
const ProductImages = [{id: 1, url: '/images/image4.svg'}, {id: 2, url: '/images/image5.svg'}, {
    id: 3,
    url: '/images/image6.svg'
}]
const ProductDetails = () => {
    const [currentSlide, setCurrentSlide] = useState(ProductImages[0])
    const handleChangeSlide = (slideId: number) => {
        // @ts-ignore
        setCurrentSlide(ProductImages.find(slide => slide.id === slideId))
    }
    return (
        <>
            <Head>
                <title>Hekto- Product Details</title>
            </Head>
            <div style={{padding: '5%'}}>
                <StyledContainer>
                    <StyledGallery>
                        {ProductImages.map((slide, index) => <StyledImageCard
                            onClick={() => handleChangeSlide(slide.id)}
                            selected={currentSlide.id === slide.id}
                            key={index} width={'151px'}
                            height={'155px'}
                            className={`${slide}-${index - 1}`}
                            image={slide.url}>
                        </StyledImageCard>)}

                        <StyledImageCard width={'100%'} height={'100%'} className="main" image={currentSlide.url}>
                        </StyledImageCard>
                    </StyledGallery>
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
