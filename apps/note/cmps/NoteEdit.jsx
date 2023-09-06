import { noteService } from '../../../services/note.service.js'

const { useState } = React

export function NoteEdit({ onSetNotes }) {
    const [noteEdit, setNoteEdit] = useState(noteService.getEmptyNote())

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        console.log('noteEdit', field, noteEdit)

        setNoteEdit((prevNoteEdit) => {
            if (field === 'txt') {
                return {
                    ...prevNoteEdit,
                    info: { ...prevNoteEdit.info, txt: value },
                }
            }
            return { ...prevNoteEdit, [field]: value }
        })
    }

    function onSaveNote(ev) {
        ev.preventDefault()
        onSetNotes(noteEdit)
    }
    console.log('noteEdit.title', noteEdit.title)
    console.log('noteEdit.info.txt', noteEdit.info.txt)

    function handleClick(dynType) {
        console.log('dynType', dynType)
    }

    return (
        <div className="form-note-edit">
            <div>
                <form onSubmit={onSaveNote}>
                    <input
                        className="bar-input"
                        onChange={handleChange}
                        type="text"
                        name="title"
                        value={noteEdit.title}
                        id="title"
                        placeholder="Title"
                    />
                    <input
                        className="bar-input"
                        onChange={handleChange}
                        type="text"
                        name="txt"
                        id="text"
                        value={noteEdit.info.txt}
                        placeholder="write note..."
                    />

                    <button>add</button>
                </form>
            </div>
            <div className="button-container">
                <button onClick={() => handleClick('NoteTodos')}>
                    <i className="fa-regular fa-square-check fa-lg"></i>
                </button>

                <button onClick={() => handleClick('NoteImg')}>
                    <i className="fa-regular fa-image fa-lg"></i>
                </button>
            </div>
        </div>
    )
}
