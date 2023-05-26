//todolo que se va a importar
import React from "react"


//---------------------------------------------
const Variables = () => {
    //codigo js
    const saludo = "Hola"
    const imagen = "https://picsum.photos/200"
    const texto_alt = "Esto es una imagen"


    //------------------------------------------
    return (
        //codigo html + js
        <div>
            <h1>{saludo}</h1>
            <img scr={imagen} alt={texto_alt} />
            
        </div>
    )
}

export default Variables 

