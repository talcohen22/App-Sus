import { NotePreview } from '../cmps/NotePreview.jsx'

export function NoteList({ notes }) {
    return (
        <section>
            <ul className="note-list">
                {notes.map((note) => (
                    <li className="note-card" key={note.id}>
                        <NotePreview note={note} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
