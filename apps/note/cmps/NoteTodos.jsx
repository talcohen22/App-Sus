import { utilService } from '../../../services/util.service.js'

export function NoteTodos({ info }) {
    console.log('NoteTodos info', info)
    let count = 0
    const toDos = info.todos
    return (
        <React.Fragment>
            <p>{info.title}</p>
            <ul>
                {toDos.map((todo) => (
                    <li key={count++}>{todo.txt}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}
