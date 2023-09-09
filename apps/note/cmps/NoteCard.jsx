import { NotePreview } from '../cmps/NotePreview.jsx'
import { NoteBtnsPreview } from '../cmps/NoteBtnsPreview.jsx'

export function NoteCard({
    note,
    onPaletteButtonClick,
    onRemoveNote,
    onTogglePin,
    onSaveTodo,
    onEditNote,
}) {
    return (
        <div
            className={`note-card ${note.style.backgroundColor === '#fff' ? 'with-border' : ''}`}
            key={note.id}
            style={{ backgroundColor: note.style.backgroundColor }}
            onClick={onEditNote}>
            <ul className="note-context">
                <NotePreview note={note} onSaveTodo={onSaveTodo} />
            </ul>
            <div className="note-btns">
                <NoteBtnsPreview
                    note={note}
                    onPaletteButtonClick={onPaletteButtonClick}
                    onRemoveNote={onRemoveNote}
                    onTogglePin={onTogglePin}
                />
            </div>
        </div>
    )
}
