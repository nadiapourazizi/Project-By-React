import Header from "./assets/component/Header";
import MainSection from "./assets/component/MainSection";
import AboutSection from "./assets/component/AboutSection";
import TradingSection from "./assets/component/TradingSection";
import WholesaleSection from "./assets/component/WholesaleSection";
import BakombaSection from "./assets/component/BakombaSection";
import CinemaSection from "./assets/component/CinemaSection";
import FilmSection from "./assets/component/FilmSection";
import LegalSection from "./assets/component/LegalSection";
import AdvoiseSection from "./assets/component/AdvoiseSection";
import FestivalSection from "./assets/component/FestivalSection";
import TouchSection from "./assets/component/TouchSection";
import Footer from "./assets/component/Footer";

import './assets/styles/master.css'
import './assets/styles/local.css'


export default function App(){
    return(
        <>
          <Header/>
          <MainSection/>
          <AboutSection/>
          <TradingSection/>
          <WholesaleSection/>
          <BakombaSection/>
          <CinemaSection/>
          <FilmSection/>
          <LegalSection/>
          <AdvoiseSection/>
          <FestivalSection/>
          <TouchSection/>
          <Footer/>
        </>
    )
}