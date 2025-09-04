import { useEffect } from 'react'
import IntroCard from '../../components/landing/IntroCard';
import mainImage from '../../assets/Rectangle-1.png';

function Landing(){
  useEffect(() => {
      document.body.classList.add("bg-lightGray"); 
      return () => {
        document.body.classList.remove("bg-lightGray");
      }
    }, []);

  return(
  <div className="container mx-auto flex flex-col lg:flex-row h-screen gap-8 pt-6 pb-6 lg:pt-11 lg:pb-11">
  <div className="leftSide flex-1 hidden lg:block">
    <img src={mainImage} alt="main image"className="w-full h-full rounded-40"/>
  </div>

  <div className="rightSide shadow-xl rounded-40 bg-mainWhite flex items-center justify-center flex-1">
    <IntroCard />
  </div>
</div>


    )
}
export default Landing;