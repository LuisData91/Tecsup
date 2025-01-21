import { createContext,useState,useEffect } from "react";


const NumberContext=createContext();

const NumberContextProvider=({Children})=>{

const [contador,setContador]=useState(10);

useEffect(()=>{
    console.log("Contador!",contador);

},[contador])


return (<NumberContext.Provider value={{ contador, setContador }}>
    {/* la idea es que este Provider sea una envoltura transparente y por eso usaremos children */}
    { Children }
  </NumberContext.Provider>)
}

export {
  NumberContext,
  NumberContextProvider
}