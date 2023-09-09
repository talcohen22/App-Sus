import { NoteCard } from './NoteCard.jsx'

export function NoteEdit({
    note,
    onPaletteButtonClick,
    onRemoveNote,
    onTogglePin,
    onSaveTodo,
    onEditNote,
    onCloseEditNote,
}) {
    return (
        <div className="overlay">
            <div className="note-edit">
                <NoteCard
                    note={note}
                    onPaletteButtonClick={onPaletteButtonClick}
                    onRemoveNote={onRemoveNote}
                    onTogglePin={onTogglePin}
                    onSaveTodo={onSaveTodo}
                    onEditNote={onEditNote}
                />
                <button className="close-edit-note" onClick={() => onCloseEditNote()}>
                    <i className="fa-solid fa-x fa-l"></i>
                </button>
            </div>
        </div>
    )
}
