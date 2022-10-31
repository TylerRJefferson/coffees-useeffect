import { useState, useEffect } from 'react';
import './App.css';
import SingleCoffee from './SingleCoffee';

function App() {
  const [data, setData] = useState([{ name: "Colada", price: '50cents' }])
  //first item gets data, second sets data; getters and setters


  
  useEffect(() => { // useEffect tells component to do something when it runs
    displayAllCoffees()
  }, []) // needs second parameter as an array, if empty, will only run once



  const displayAllCoffees = () => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then(response => response.json()) //convert to json
      .then((data) => setData(data)) //get formatted data
      .catch(err => console.error(err))
  }

  console.log('my data', data)

  return (
    <div className="App">
      <main>
        <h1>Coffees by Sample API</h1>
        <button onClick={() => displayAllCoffees()}>Display Coffee List</button>
        <div className='menu-items'>
          {data.map(item => {
            console.log('each item', item)
            return <SingleCoffee entireObject={item} />
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
