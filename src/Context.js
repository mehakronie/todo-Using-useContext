import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext(
{alltask:[
    {id: 0,
    text:'',
    done:false
    }
],
adding:()=>{},
update:()=>{},
deleting:()=>{}
}
)
export const TodoProvider = TodoContext.Provider
export function useTodo(){
    return useContext(TodoContext)
}