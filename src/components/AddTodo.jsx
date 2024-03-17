import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import { useState } from "react";

function AddTodo ()
{

    const [ input, setInput ] = useState( "" );
    const dispath = useDispatch();

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();

        if ( input.trim() === "" ) return
        dispath( addTodo( input ) )
        setInput( "" );
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={( e ) => setInput( e.target.value )} placeholder="Adicione uma tarefa" />
            <button type="submit">Enviar Tarefa</button>
        </form>
    )
}

export default AddTodo;