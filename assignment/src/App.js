// import logo from './logo.svg';
import './App.css';
import Cocktail from './components/Cocktail/cocktail';
import { BrowserRouter as Router ,Routes  ,Route} from 'react-router-dom'
import OrdinaryDrinks from './components/OrdinaryDrink/ordinarydrinks';
// import { useEffect,useState } from 'react';
import Home from './components/Home/home';


function App() {
 
  return (
   <>
   <Router>
   <Routes>
     <Route path='/' element={ <Home/>}></Route>
     <Route path='/cocktail' element={ <Cocktail/>}> </Route>
     <Route path='/ordinaryDrinks' element={ <OrdinaryDrinks/>}> </Route>
     <Route path='/shake' element={ <Cocktail/>}> </Route>
   </Routes>
 </Router>
   </>
  );
}

export default App;
