export function NoteTodos({ info }) {
    console.log('NoteTodos info', info)

    const toDos = info.todos
    return (
        <section>
            <p>{info.title}</p>
            <ul>
                {toDos.map((todo) => (
                    <li key="">{todo.txt}</li>
                ))}
            </ul>
        </section>
    )
}
