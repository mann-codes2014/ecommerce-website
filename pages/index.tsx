import type {GetServerSideProps} from 'next'
import {HeroBanner} from "../components";
import {client} from "../lib/client";
import Head from "next/head";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";

export const getServerSideProps: GetServerSideProps = async () => {
    const productsQuery = `*[_type == "product"]`
    const productsData = await client.fetch(productsQuery);

    const bannerQuery = `*[_type == "banner"]`
    const bannerData = await client.fetch(bannerQuery);

    const latestProductsQuery = `*[_type == "latestProduct"]`
    const latestProductsData = await client.fetch(latestProductsQuery);
    return {
        props: {productsData, bannerData, latestProductsData}
    }
}
type HomePageProps = {
    productsData: [];
    bannerData: [];
    latestProductsData: []
}
const Home = ({productsData, bannerData, latestProductsData}: HomePageProps) => {
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
        </>
    )
}

export default Home
