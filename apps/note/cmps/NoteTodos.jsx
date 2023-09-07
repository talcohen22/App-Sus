import { utilService } from '../../../services/util.service.js'

export function NoteTodos({ note }) {
    let count = 0
    const { info, title } = note
    const toDos = info.todos

    return (
        <React.Fragment>
            <p>{title}</p>
            <ul>
                {toDos.map((todo) => (
                    <li key={count++}>{todo.txt}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}
