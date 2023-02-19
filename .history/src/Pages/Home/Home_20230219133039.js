import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Footer></Footer>
        </section>
    );
};

export default Home;