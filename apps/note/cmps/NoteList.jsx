import { NotePreview } from '../cmps/NotePreview.jsx'
import { NoteBtnsPreview } from '../cmps/NoteBtnsPreview.jsx'

export function NoteList({ notes, onPaletteButtonClick }) {
    if (!notes || !notes.length) return <div> loading.. </div>

    return (
        <section className="note-list">
            {notes.map((note) => (
                <div className="note-card" key={note.id}>
                    <ul className="note-context">
                        <NotePreview note={note} />
                    </ul>
                    <div className="note-btns">
                        <NoteBtnsPreview note={note} onPaletteButtonClick={onPaletteButtonClick} />
                    </div>
                </div>
            ))}
        </section>
    )
}
