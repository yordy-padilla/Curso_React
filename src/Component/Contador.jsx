import { useState } from "react"
import React from 'react'

const Contador = () => {
    const [contador, setcontador] = useState(0)

    const aumentar = () => {
        setcontador(contador+1)
    }

    const disminuir = () => {
        setcontador(contador-1)
    }

  return (
    <div>
      <h1>CONTADOR</h1>
      <button onClick={aumentar}>Aumentar</button>
      <span>     {contador}    </span>
      <button onClick={disminuir}>Decrementar</button>
    </div>
  )
}
 
export default Contador
