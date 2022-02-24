
import './App.css';

import './style.css';



import Header from "./Header";
import SearchEngine from "./SearchEngine";
import Searched from "./Searched";
import NextDays from "./NextDays";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
     
       <div class="body">
        <Header />
        <SearchEngine />
        <Searched />
        <NextDays />
        <Forecast />
        <Footer />
      </div>
         </div>
  );
}

export default App;
