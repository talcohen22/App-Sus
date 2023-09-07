import { NoteTxt } from '../cmps/NoteTxt.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'
import { NoteTodos } from '../cmps/NoteTodos.jsx'

export function NotePreview({ note }) {
    const cmpType = note.type
    let noteComponent

    switch (cmpType) {
        case 'NoteTxt':
            noteComponent = <NoteTxt {...note} />
            break
        case 'NoteImg':
            noteComponent = <NoteImg {...note} x />
            break
        case 'NoteTodos':
            noteComponent = <NoteTodos {...note} />
            break
        default:
            noteComponent = null
    }

    return (
        <section className="txt-info">
            {note.title !== undefined && <p>{note.title}</p>}
            {noteComponent}
        </section>
    )
}
