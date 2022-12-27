import './style.css'
import Header from './Components/Shared/Header'
import Slider from "./Components/Slider";
import WeAre from "./Components/WeAre";

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



    </div>
  );
}

export default App;
