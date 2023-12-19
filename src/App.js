import './App.css';
import './StyleSheets/NavigationBar.css';
import './StyleSheets/Section1.css';
import './StyleSheets/Section2.css';
import NavigationBar from './Components/NavigationBar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <NavigationBar />
       <Section1 />
       <Section2 />
       <Section3/>
       <Section4 />
       <Section5 />
       <Section6 />
       <Footer />
    </div>
  );
}

export default App;
