import React from 'react'

const PeticionApi = () => {
  const [personajes, setPersonajes] = React.useState([])
  const [paginacion, setPagigancion] = React.useState(1)

  const traerPersonajes = async() =>{
    try{
      const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`)
      const {results} = await res.json()
      setPersonajes(results)
      console.log(results)
    }catch(error){
      console.log(error)
    }
    
  }
  const siguente = async() =>{
    await setPagigancion(paginacion+1)
    traerPersonajes()
  }
  const atras = async() =>{
    await setPagigancion(paginacion-1)
    traerPersonajes()
  }
  return (
    <div>
    <h1>PETICION A API</h1>
    <button onClick={traerPersonajes}>Traer personaje</button>
    <button onClick={atras}>Atras</button> 
    <button onClick={siguente}>Siguente</button>
    
    
    {
      personajes.map(({id, status, name, species, image }) => (
        <div key={id}>
          <h4>{id} - {status} - {name} - {species}</h4>
          <img src={image} alt={name}/>
        </div>
      ))
    }
        
    </div>   
  )
}

export default PeticionApi
