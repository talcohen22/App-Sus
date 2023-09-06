import { NotePreview } from '../cmps/NotePreview.jsx'

export function NoteList({ notes }) {
    return (
        <section className="note-list">
            {notes.map((note) => (
                <ul className="note-card" key={note.id}>
                    <NotePreview note={note} />
                </ul>
            ))}
        </section>
    )
}
