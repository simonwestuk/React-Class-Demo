
import './App.css';

//import components for the main page - these wont change page to page
import Header from './Components/Header'
import Footer from './Components/Footer'
//import screens
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import AboutScreen from './Screens/AboutScreen'
import ContactScreen from './Screens/ContactScreen'

//import routing for page navigation to avoid page reload
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path ="/products" element={<ProductScreen/>}/>
            <Route exact path ="/about" element={<AboutScreen/>}/>
            <Route exact path ="/contact" element={<ContactScreen/>}/>
          </Routes>
        <Footer />
      </Router>
   </div>
  );
}

export default App;
