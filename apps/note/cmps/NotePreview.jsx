import { NoteTxt } from '../cmps/NoteTxt.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'
import { NoteTodos } from '../cmps/NoteTodos.jsx'

export function NotePreview({ note, onSaveTodo }) {
    const cmpType = note.type
    let noteComponent

    switch (cmpType) {
        case 'NoteTxt':
            noteComponent = <NoteTxt note={note} />
            break
        case 'NoteImg':
            noteComponent = <NoteImg note={note} />
            break
        case 'NoteTodos':
            noteComponent = <NoteTodos note={note} onSaveTodo={onSaveTodo} />
            break
        default:
            noteComponent = null
        // return ?
    }
    return <section className="txt-info">{noteComponent}</section>
}
