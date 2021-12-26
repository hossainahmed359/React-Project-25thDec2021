import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../../Shared/Servies/Services/Services';
import Banner from '../Banner/Banner';
import BlogSection from '../BlogSection/BlogSection';
import NewArrival from '../NewArrival/NewArrival';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <NewArrival></NewArrival>
            <Reviews></Reviews>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;