import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos";

const AddToDo = () => {
    const [todo, setTodo] = useState("");
    const { handleAddToDo } = useTodos();

    console.log("Brfore defining handleFormSubmit");

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted with", todo);
        handleAddToDo(todo);
        setTodo("");
    };

    console.log("handleFormSubmit is defined:", handleFormSubmit);

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddToDo