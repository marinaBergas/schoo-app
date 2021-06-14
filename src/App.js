import Slider from "./componenets/slider/Slider";
import SliderDate from "./componenets/slider/SliderDate";
import "./App.css";
import CardsSection from "./componenets/cards section/CardsSection";
import Header from "./componenets/header/Header";
function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className="container App__header__header-container">
          <div className="row App__header__header-container__header-row">
            <Header />
          </div>
        </div>
      </header>
      <section className="App__cardSection">
        <div className=" container App__cardSection__card-container  ">
          <div className="row App__cardSection__card-container__card-row">
            <CardsSection />
          </div>
        </div>
      </section>
      <section className="App__schoolSection">
        <div className="container App__schoolSection__card-container">
    
          <SliderDate/>
    
        </div>
      </section>
    </div>
  );
}

export default App;
