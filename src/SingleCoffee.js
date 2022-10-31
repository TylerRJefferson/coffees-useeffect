import { useState } from "react"

export default function SingleCoffee({ entireObject }) {
  
  const [favorite, setFavorite] = useState(false)

  return (
    <div className="menu-items__item" style={{ backgroundColor: favorite ? 'red' : 'white'}}>
      <img
        src={entireObject.image}
        alt="" />
      <div>
        <h3>{entireObject.name}</h3>
        <span>Price: {entireObject.price}</span>
        <p>{entireObject.description}</p>
        <button onClick={() => setFavorite(true)}>Favorite</button>
      </div>
    </div>
  )
}



// const exampleProps = {
//   description: "cuban coffee my guy",
//   name: "Cafe Cubano",
//   price: "mucho mula",
// }

// const description = exampleProps.description
// const name = exampleProps.name
// const price = exampleProps.price

// const {description, name, price} = exampleProps //destructuring above

// console.log('props here ->', name) //the entire props object
