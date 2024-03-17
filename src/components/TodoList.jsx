import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo, filterTodos } from "../slices/todoSlice";

function TodoList ()
{
    const { list, filter } = useSelector( ( state ) => state.todos );
    const filteredList = list.filter( ( todo ) =>
    {
        if ( filter === 'all' ) return true;
        if ( filter === 'completed' ) return todo.completed;
        if ( filter === 'incompleted' ) return !todo.completed;
        return true;
    } )

    const dispatch = useDispatch();

    return (

        <div>
            <button onClick={() => dispatch( filterTodos( "all" ) )}>Todas</button>
            <button onClick={() => dispatch( filterTodos( "completed" ) )}>Completas</button>
            <button onClick={() => dispatch( filterTodos( "incompleted" ) )}>Incompletas</button>
            <ul>
                {filteredList.map( ( todo ) => (
                    <li key={todo.id}>
                        <span onClick={() => dispatch( toggleTodo( todo.id ) )} className={todo.completed ? "line-trough" : null} >{todo.text}</span>
                        <button onClick={() => dispatch( removeTodo( todo.id ) )}>Remover</button>
                    </li>
                ) )}
            </ul>
        </div>

    )
}

export default TodoList;