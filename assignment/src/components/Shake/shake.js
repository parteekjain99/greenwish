import React, { useState, useEffect } from 'react'


const Shake = () => {

    const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

  

    useEffect(() => {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shake")
      .then((result) => result.json())
      .then((data) => {
        setUsers(data.drinks)
      })
    }, []);

    

    return (
        <>
             {

users.map((curElem) => {

    const { idDrink,strDrink,strDrinkThumb } = curElem;
return (
       <div className='cointainer'>
       <div key={idDrink}  className="card">
        <img  src= {strDrinkThumb} alt={strDrink} />
        <h2>{strDrink}</h2>
        <button>view Details</button>
       </div>
       </div>        
)
})        
}
        </>
 )
}

export default Shake