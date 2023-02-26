import { useReducer,useEffect } from "react";
import { todoReducer } from "./todoReducer";
const initialstate=[
    {
        id:new Date().getTime(),
        description:'Recolectar la piedra filosofal',
        done:true,
    },
    {
      id:new Date().getTime()*2,
      description:'Recolectar la piedra del alma',
      done:true,
  }
  ]
  const init=()=>{
  
    return JSON.parse(localStorage.getItem('todos')) || [];
  }
export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer,initialstate,init);
    const todosCount=todos.length;
    const pendigCount=todos.filter(todo=>!todo.done).length;
    useEffect(() => {
                    localStorage.setItem('todos',JSON.stringify(todos));
                    }
                , [todos])
      
    const onhandleNewTodo=(todo)=>{
        const action={
       type:'Add to do',
       payload:todo,
     }
        dispatch(action);
    }//onhandleNewTodo

    const handleDeleteTodo=(id)=>{
       dispatch({
         type:'Remove to do',
         payload:id
       })
    }//handleDeleteTodo
    const handletoggleTodo=(id)=>{
       dispatch({
       type:'toggle to do',
       payload:id
     })
    }//handletoggleTodo
    
    return{
       todos,onhandleNewTodo,
       handleDeleteTodo,handletoggleTodo,
       todosCount,pendigCount,
      }
}//useTodo
