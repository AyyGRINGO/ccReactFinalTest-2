import React, { useEffect, useState } from "react"
import Client from "./components/Client"

const App = () => {

  const [data, setData]=useState("")

  const [inputValue, setInputValue] = useState('');

  const [isLoading, setIsLoading]=useState(true)

  const [fakeData,setFakeData]=useState([
      {
        name: 'Kovács Béla',
        pets: [
          { name: "Bodri", animal: "dog", isVaccinated: false },
          { name: "Cirmi", animal: "cat", isVaccinated: false }
        ]
      },
      {
        name: 'Varga Lajos',
        pets: [
          { name: "Frakk", animal: "dog", isVaccinated: false }
        ]
      },
      {
        name: 'Nagy Béla',
        pets: [
          { name: "Csőrike", animal: "pigeon", isVaccinated: false }
        ]
      }
    ]
   )

  const getData= ()=>{
    setIsLoading(prevState=>!prevState)
     fetch(`https://demoapi.com/api/vet/clients?search=${inputValue}`).then(response=>response.json()).then(data=>{
    //  fetch("https://demoapi.com/api/vet/clients?search=AMIT-A-FELHASZNÁLÓ-ÍRT").then(response=>response.json()).then(data=>{
      setData(data)
      console.log(data)
      setIsLoading(prevState=>!prevState)
  }) 
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
    
  }

  const clients = fakeData.map(element=><Client  name={element.name}  pets={element.pets}  />   )
  
  console.log(clients)
  return (
    
    <div>
    <title>Veterinarian admin - clients</title>
    <input type="text" onChange={handleInputChange} value={inputValue} />    
    <button disabled={inputValue.length < 3} onClick={getData} >Search</button>
    {clients}
    </div>
  )
}

export default App
