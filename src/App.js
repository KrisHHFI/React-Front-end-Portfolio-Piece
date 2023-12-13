import './App.css';
import NavigationBarA from './Components/Project A/Navigation Bar A';
import PageContentA1 from './Components/Project A/PageContent A 1';
import PageContentA2 from './Components/Project A/PageContent A 2';
import PageContentA3 from './Components/Project A/PageContent A 3';
import Footer from './Components/Project A/Footer A';

function App() {
  return (
    <div className="App">
       <NavigationBarA />
       <PageContentA1 />
       <PageContentA2 />
       <PageContentA3 />
       <Footer />
    </div>
  );
}

export default App;
