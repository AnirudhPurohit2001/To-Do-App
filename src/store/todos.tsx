import { createContext, ReactNode, useState, useContext } from "react";

export type TodosProviderProps = {
    children: ReactNode
}
export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    created: Date;
}
export type TodosContext = {
    todos: Todo[];
    handleAddToDo: (task: string) => void; // Call Signature
}




export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({ children }: TodosProviderProps) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddToDo = (task: string) => {

        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    created: new Date()
                },
                ...prev
            ]
            console.log(prev);
            console.log(newTodos);
            return newTodos
        })
    }

    return < todosContext.Provider value={{ todos, handleAddToDo }}>
        {children}
    </todosContext.Provider >

}

//Consumer
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if (!todosConsumer) {
        throw new Error("useTodos used outside of provider")
    }

    return todosConsumer;
}