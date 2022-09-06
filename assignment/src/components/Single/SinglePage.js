// import React from 'react'

// const SinglePage = () => {
//     const [users, setUsers] = useState([]);
   
//     useEffect(() => {
//         fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//         .then((result) => result.json())
//         .then((data) => {
//           setUsers(data.drinks)
//         })
//       }, []);
  

// users.map((curElem) =>
      
//  {   
    
    
//     const { idDrink,strDrink,strDrinkThumb } = curElem;
    
//     return (
//         <div className="details-wrapper">
//         <h2>{dets.strDrink}</h2> <br />
//         {dets.length !== 0 && (
//           <div className="details">
//             <div className="details-img">
//               <img src={dets.strDrinkThumb} alt={dets.strDrink} />
//             </div>

//             <div className="details-info">
//               <p>Drink type: {dets.strAlcoholic} </p>
//               <p>Glass Type: {dets.strGlass} </p>
//               <h3>Instructions: </h3>
//               <p>{dets.strInstructions}</p>
//               <h3>Ingredients: </h3>
//               <p>{dets.strIngredient1}</p>
//               <p>{dets.strIngredient2}</p>
//               <p>{dets.strIngredient3}</p>
//               <p>{dets.strIngredient4}</p>
//               <p>{dets.strIngredient5}</p>
//               <p>{dets.strIngredient6}</p>
//               <p>{dets.strIngredient7}</p>
//             </div>
//           </div>
//         )}
//         <Link to="/">Back</Link>
//       </div>
//   )}
// }

// export default SinglePage