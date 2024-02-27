// import { useData } from '../context/dataContext'
import { useState } from 'react';

const data = [
  {
      id: 1,
      name: 'momo',
      power: 'running around'
  },
  {
      id: 2,
      name: 'jaxon',
      power: 'lounging'
  },
  {
      id: 3,
      name: 'bizkit',
      power: 'licking windows'
  },
]

const DisplayAll = () => {
   //use array destructuring, 
    //the first index is the data, state
    //the second is the setter function which allows you to manipulate the data
    //returns an array with two index
   //always follows the convention - name of the data, setNameofData
  const [dataState, setDataState] = useState(data); // the useState can take in arg, this is refferred to as the INITIAL STATE is the first render
  const [showData, setShowData] = useState(false);
 
  function toggleData() {
    setShowData(true)
  }
  return (
    <div>
      {dataState.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          {showData === true ? <p>{item.power}</p> : ''}
          <button onClick={toggleData}>Show me the power</button>
        </div>
      ))}
    </div>
  )
}

export default DisplayAll