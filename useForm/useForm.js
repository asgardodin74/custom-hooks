import { useState } from 'react';
export function useForm(initialform={}) {
  const [formState, setFormState] = useState(initialform);
  const onInputChange=({target})=>{
      const{name,value}=target;
      setFormState({
                 ...formState,
                [name]:value
                })
  }//onInputChange

  const onResetForm=()=>{
    setFormState(initialform);
  }//onResetForm
  return{
        //Si desestructuramos el formState mandamos los atributos a el
        //componente padre (username,email)
        ...formState,
        formState,
        onInputChange,
        onResetForm,        
      }
}//useForm
