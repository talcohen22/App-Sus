import { NotePalette } from './NotePalette.jsx'
const { useState } = React

export function NoteBtnsPreview({ note, onPaletteButtonClick, onRemoveNote, onTogglePin }) {
    const [isClickPalette, setIsClickPalette] = useState(false)

    function togglePalette() {
        setIsClickPalette((prevIsClick) => !prevIsClick)
    }

    function onRemove(noteId) {
        onRemoveNote(noteId)
    }

    function togglePin(noteId) {
        onTogglePin(noteId)
    }

    return (
        <React.Fragment>
            <button className="btn btn-pin" onClick={() => togglePin(note.id, note.isPinned)}>
                <i className="fa-solid fa-thumbtack fa-sm"></i>
            </button>
            <button className="btn btn-palette" onClick={() => togglePalette()}>
                <i className="fa-solid fa-palette fa-sm"></i>
            </button>
            <button className="btn" onClick={() => onRemove(note.id)}>
                <i className="fa-solid fa-trash fa-sm"></i>
            </button>
            {isClickPalette && <NotePalette note={note} onPaletteButtonClick={onPaletteButtonClick} />}
        </React.Fragment>
    )
}
