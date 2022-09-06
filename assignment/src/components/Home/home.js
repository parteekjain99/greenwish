// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Cocktail from '../Cocktail/cocktail'
import OrdinaryDrinks from '../OrdinaryDrink/ordinarydrinks';
import Shake from '../Shake/shake';
import "./sidebar.css"; 
const Home = () => {
  
  return (
    <>

    <div className="main">
      <h2  id="sae">
        cocktail
      </h2>
      <Cocktail />
         <br></br>
         <br></br>
      <h2 id='shake'>   Shake </h2>
      <Shake/>

      <h2 id='ordinaryshake'>Ordinary Drink</h2>
      <OrdinaryDrinks/>

      <h2 id='softdrinks'>Soft Drinks</h2>
      <OrdinaryDrinks/>
    </div>
   
      <div className="sidebarItem">
        <span className="sidebarTitle">MenU</span>
        <div className="sidebarSocial">
         <h2 ><a href="#sae">Cocktails</a></h2>
         <h2 ><a href="#ordinaryshake">ordinarydrinks</a></h2>
         <h2 ><a href="#softdrinks">softdrinks</a></h2>
         <h2 ><a href="#shake">Shake</a></h2>
          
        </div>
      </div>
    </>
  )
}

export default Home