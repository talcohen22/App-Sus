const { useState } = React

export function NoteTodos({ note, onSaveTodo }) {
    const { info, title } = note
    const { todos } = info
    const [todosState, setTodosState] = useState(todos)

    function handleClickTodo(index) {
        const updatedTodos = [...todosState]
        const currentTodo = updatedTodos[index]
        currentTodo.doneAt = currentTodo.doneAt ? null : Date.now()
        setTodosState(updatedTodos)
        onSaveTodo(updatedTodos, note.id)
    }

    return (
        <div>
            <p className="bold-title">{title}</p>
            <ul className="todo-list-card">
                {todosState.map((todo, index) => (
                    <li
                        className={`todo-line ${todo.doneAt !== null ? 'line-through' : ''}`}
                        key={index}
                        onClick={() => handleClickTodo(index)}>
                        {todo.txt}
                    </li>
                ))}
            </ul>
        </div>
    )
}
