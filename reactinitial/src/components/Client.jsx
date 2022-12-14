import React, { useEffect, useState } from "react"




const Client = ({name,pets}) => {

const petElements = pets.map(pet=>(<>
<div>  {pet.name} </div>
<div>  {pet.animal}</div>
<div>  Vaccinated: </div>
<button onClick={(e)=>vaccinePost(e)} name={pet.name} >{pet.isVaccinated? "true":"false"}</button>
</>))


const vaccinePost=(e)=>{
    let id= (e.target.name)
    fetch('https://demoapi.com/api/vet/pets/', {
            method: 'POST', 
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ }) 
            // body data type must match "Content-Type" header
          })
          .then(response => response.json({name: id, isVaccinated:!}))
          .then(data => {
            console.log(data)
            // setEmailAnimation(prevState=>!prevState)
        
        })

}

    return(<div>

        <span>{name}</span>
        
        {petElements}



        </div>)
}


export default Client