import { useEffect,useState } from "react"
export const useFetch=(url)=> {
    const [state,setState] = useState({
        data:null,
        isLoading:true,
        hasError:null,
    })
    // const getFetch=async()=>{
    //     const resp=await fetch(url);
    //     const data=await resp.json();
    //     console.log("data",data);
    //      setState({data:data,isLoading:false,hasError:null})
    // }
    const getFetch2=()=>{
        //cuando se llame a la peticion que ponga isLoading
        setState({
            ...state,
            isLoading:true
        })
        fetch(url)
        .then(resp=>resp.json())
        .then(data=> setState({data:data,isLoading:false,hasError:null}))
        .catch((error)=>{
            //Esto se ejecuta si hay error EXCEPCION O REJECT
            console.log(error);
            return `Error ${error}`
            })}
    useEffect(()=>{
        getFetch2();
    },[url])
    return {
        data:state.data,
        isLoading:state.isLoading,
        hasError:state.hasError,
        };
}//UseFetch
