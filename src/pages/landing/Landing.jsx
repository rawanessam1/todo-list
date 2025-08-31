import { useState } from 'react'
import IntroCard from '../../components/landing/IntroCard';
import mainImage from '../../assets/Rectangle-1.png';

function Landing(){
    return(
  <div className="container mx-auto flex h-screen gap-8 pt-11 pb-11">
  <div className="leftSide flex-1">
    <img src={mainImage} alt="main image"className="w-full h-full rounded-[40px]"/>
  </div>

  <div className="rightSide shadow-xl rounded-[40px] bg-mainWhite flex items-center justify-center flex-1">
    <IntroCard />
  </div>
</div>


    )
}
export default Landing;