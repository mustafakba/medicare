import './style.css'
import Header from './Components/Shared/Header'
import Slider from "./Components/Slider";
import WeAre from "./Components/WeAre";
import Advantages from "./Components/Advantages";
import OurServices from "./Components/OurServices";
import OurPortfolio from "./Components/OurPortfolio";
import OurDoctor from "./Components/OurDoctor";
import OurPricing from "./Components/OurPricing";
import Jobs from "./Components/Jobs";
import Appointment from "./Components/Appointment";
import LatestBlog from "./Components/LatestBlog";
import GetTouch from "./Components/GetTouch";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div style={{margin:0, padding:0, fontSize:'100%',font : 'inherit' }} className="App">
        {/*  Header section start*/}
            <Header></Header>
        {/*  Header section finished*/}

        {/*  Slider section start*/}
            <Slider></Slider>
         {/* Slider Section finished*/}

        {/*  WhoWeAre section start*/}
            <WeAre></WeAre>
         {/* WhoWeAre Section finished*/}
        {/*  Advantages section start*/}
            <Advantages></Advantages>
         {/* Advantages Section finished*/}

        {/*  OurServices section start*/}
            <OurServices></OurServices>
         {/* OurServices Section finished*/}

        {/*  OurPortfolio section start*/}
            <OurPortfolio></OurPortfolio>
         {/* OurPortfolio Section finished*/}


        {/*  OurPortfolio section start*/}
            <OurDoctor></OurDoctor>
         {/* OurPortfolio Section finished*/}

         {/*  OurPortfolio section start*/}
            <OurPricing></OurPricing>
         {/* OurPortfolio Section finished*/}

        {/*  Jobs section start*/}
            <Jobs></Jobs>
         {/* Jobs Section finished*/}

        {/*  Appointment section start*/}
            <Appointment></Appointment>
         {/* Appointment Section finished*/}

        {/*  LatestBlog section start*/}
            <LatestBlog></LatestBlog>
         {/* LatestBlog Section finished*/}

        {/*  LatestBlog section start*/}
            <GetTouch></GetTouch>
         {/* LatestBlog Section finished*/}


        {/*  LatestBlog section start*/}
            <Footer></Footer>
         {/* LatestBlog Section finished*/}




    </div>
  );
}

export default App;
