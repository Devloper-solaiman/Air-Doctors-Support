import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Info from './Info';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Info></Info>
            <Footer></Footer>
        </section>
    );
};

export default Home;