import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, content1ObjOne } from './Data';
import {  ContentSec, InfoSection, Pricing, ContentSec2, Footer1, Newsletter, Product   } from '../../components';
import Content1 from '../../components/Content1/Content1';
import Card from '../../components/CardContents/Cards';
import SliderCarousel from '../../components/SliderCarousel/SliderCarouselUI';

import Cards from '../../components/CardContents2/Cards2';


import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import 'bootstrap/dist/css/bootstrap.css';






function Home() {
  return (
    <>
      <SliderCarousel/>
      <Content1 {...content1ObjOne} />
      <Product/>
      <ContentSec/>
      <Cards />
      <ContentSec2/>
      <Newsletter/>
      <Footer1/>
    </>
  );
}

export default Home;
