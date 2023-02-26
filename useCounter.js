import { useState } from "react"
//Si no pasamos ningun valor desde el componente padre
//entonces initialValue=10
export const UseCounter=(initialValue=10)=>{
    const[counter,SetCounter]=useState(initialValue);
    const Incrementar=()=>{
        SetCounter(counter+1);
    }///Incrementar
    const Decrementar=()=>{
        SetCounter(counter-1);
    }//Decrementar
    const Reset=()=>{
        SetCounter(initialValue);
    }
    return{
            counter,
            Incrementar,Decrementar,Reset,
           }  
}//UseCounter