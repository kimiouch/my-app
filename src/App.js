
import './App.css';

import './style.css';

import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
     
       <div className="body">
        <SearchEngine defualtcity="New York"/>
        <Footer />
      </div>
     </div>
  );
}

export default App;
