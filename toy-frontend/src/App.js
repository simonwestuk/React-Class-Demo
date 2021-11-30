
import './App.css';

//import components
import Header from './Components/Header'
import Footer from './Components/Footer'
//import screens
import HomeScreen from './Screens/HomeScreen'


function App() {

  const name = "Jim";
  let tempName = "d"

  return (
    <div>
      <Header />
      <HomeScreen />
      <Footer />
      
   </div>
  );
}

export default App;
