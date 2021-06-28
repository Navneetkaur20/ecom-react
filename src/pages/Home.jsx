import React from 'react';
import ProductList from '../components/Products/ProductList';
import FullBanner from '../components/FullBanner/FullBanner';
import Title from '../components/Products/Title';
const Home=()=>{
return(
    <>
    <section className="space">
    <Title title="New Arrivals" text="Vitae posuere urna blandit sed. Praesent ut dignissim risus"/>
    <ProductList/>
    </section>
    < FullBanner/>

    </>
)
}
export default Home;