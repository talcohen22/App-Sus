import { NotePreview } from '../cmps/NotePreview.jsx'

export function NoteList({ notes }) {
    if (!notes || !notes.length) return <div> loading.. </div>

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
