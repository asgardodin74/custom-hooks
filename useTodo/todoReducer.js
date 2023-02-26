
export const todoReducer=(initialState,action)=>{

    switch(action.type){
        case 'Add to do':
           return [...initialState,action.payload];
        
        case 'Remove to do':
            return initialState.filter(todo=>todo.id!==action.payload)
        case 'toggle to do':
                return initialState.map(todo=>{
                    if(todo.id===action.payload)
                    {
                       return{
                            ...todo,
                            done:!todo.done
                        };
                    }
                    return todo;
                })
        default:
            return initialState;
    }
}//todoReducer