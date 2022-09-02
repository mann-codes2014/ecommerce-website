import type {GetServerSideProps} from 'next'
import {DiscountBanner, FeaturedProducts, HeroBanner, LatestProducts} from "../components";
import {client} from "../lib/client";
import Head from "next/head";

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
type HomePageProps = {
    productsData: [];
    bannerData: [];
    latestProductsData: [];
    discountData: []
}
const Home = ({productsData, bannerData, latestProductsData, discountData}: HomePageProps) => {
    return (
        <>
            <Head>
                <title>Hekto- Home</title>
            </Head>
            <HeroBanner data={bannerData}/>
            <div style={{padding: '5% 15%'}}>
                <FeaturedProducts products={productsData}/>
            </div>
            <div style={{padding: '5% 15%'}}>
                <LatestProducts products={latestProductsData}/>
            </div>
            <div style={{padding: '5% 15%'}}>
                <DiscountBanner data={discountData}/>
            </div>
        </>
    )
}

export default Home
