
import './App.css';

import './style.css';



import Header from "./Header";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
     
       <div className="body">
        <Header />
        <SearchEngine defualtcity="New York"/>
        <Footer />
      </div>
     </div>
  );
}

export default App;
