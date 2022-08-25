import type {GetServerSideProps} from 'next'
import {HeroBanner} from "../components";
import {client} from "../lib/client";

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
            <HeroBanner data={bannerData}/>
            {/*<div className="products-heading">*/}
            {/*    <h2>Best Selling Products</h2>*/}
            {/*    <p>Speakers of many variations</p>*/}
            {/*</div>*/}
            {/*<div className="products-container">*/}
            {/*    {['Product 1', 'Product 2'].map(product => product)}*/}
            {/*</div>*/}
            {/*Footer*/}
        </>
    )
}

export default Home
