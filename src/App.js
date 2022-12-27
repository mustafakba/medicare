import './style.css'
import Header from './Components/Shared/Header'
import Slider from "./Components/Slider";
import WeAre from "./Components/WeAre";
import Advantages from "./Components/Advantages";
import OurServices from "./Components/OurServices";

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



    </div>
  );
}

export default App;
