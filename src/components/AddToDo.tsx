import { useState } from "react"

const AddToDo = () => {

    const [todo, setToDO] = useState("");

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={todo} onChange={(e) => setToDO(e.target.value)} />
            <button type="submit">ADD</button>
        </form>
    )
}

export default AddToDo
