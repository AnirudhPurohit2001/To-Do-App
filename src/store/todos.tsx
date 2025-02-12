import { createContext, ReactNode } from "react";

export type TodosProviderProps = {
    children: ReactNode
}
export type TodosContext = {
    todos: Todo[];
    handleAddToDo: (task: string) => void;
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    created: Date;
}


export const todosContext = createContext(null)

export const TodosProvider = ({ children }: TodosProviderProps) => {
    return
    <todosContext.Provider value={{ todo, handleAddToDo }}>
        {children}
    </todosContext.Provider>

}