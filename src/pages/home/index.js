import React from 'react';
import { Header, Footer } from '../../components';
import FPage from './firstPage/FPage';
import Banner from './homeBanner/Banner';
import Arrivals from './arrivals/Arrivals';
import Review from './review/Review';
import Contact from './contact/Contact';

import './home.scss';

export default function index() {
  return (
    <div className='home'>
      <Header />
        <FPage />
        <Banner />  
        <Arrivals />
        <Review />
        <Contact />
      <Footer />
    </div>
  )
}
