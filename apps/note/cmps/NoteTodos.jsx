const { useState } = React

export function NoteTodos({ note }) {
    const { info, title } = note
    const { todos } = info
    const [todosState, setTodosState] = useState(todos)

    function handleClickTodo(index) {
        const updatedTodos = [...todosState]
        updatedTodos[index].done = !updatedTodos[index].done
        setTodosState(updatedTodos)
    }

    return (
        <div>
            <p>{title}</p>
            <ul className="todo-list-card">
                {todosState.map((todo, index) => (
                    <li
                        className={`todo-line ${todo.done ? 'line-through' : ''}`}
                        key={index}
                        onClick={() => handleClickTodo(index)}>
                        {todo.txt}
                    </li>
                ))}
            </ul>
        </div>
    )
}
