import type {GetServerSideProps} from 'next'
import {HeroBanner} from "../components";
import {client} from "../lib/client";
import Head from "next/head";
import FeaturedProducts from "../components/FeaturedProducts";

export const getServerSideProps: GetServerSideProps = async () => {
    const productsQuery = `*[_type == "product"]`
    const productsData = await client.fetch(productsQuery);

    const bannerQuery = `*[_type == "banner"]`
    const bannerData = await client.fetch(bannerQuery);
    return {
        props: {productsData, bannerData}
    }
}
type HomePageProps = {
    productsData: [];
    bannerData: [];
}
const Home = ({productsData, bannerData}: HomePageProps) => {
    return (
        <>
            <Head>
                <title>Hekto- Home</title>
            </Head>

            <HeroBanner data={bannerData}/>
            <div style={{padding: '5% 15%'}}>
                <FeaturedProducts products={productsData}/>
            </div>
            {/*<div className="products-container">*/}
            {/*    {['Product 1', 'Product 2'].map(product => product)}*/}
            {/*</div>*/}
            {/*Footer*/}
        </>
    )
}

export default Home
