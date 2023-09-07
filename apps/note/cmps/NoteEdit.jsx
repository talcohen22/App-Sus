import { noteService } from '../../../services/note.service.js'
import { NoteDefaultForm } from './NoteDefaultForm.jsx'
import { NoteImgForm } from './NoteImgForm.jsx'
import { NoteTodosForm } from './NoteTodosForm.jsx'
import { NoteTxtForm } from './NoteTxtForm.jsx'

const { useState, useEffect } = React

export function NoteEdit({ onSetNotes }) {
    const [noteEdit, setNoteEdit] = useState(noteService.getEmptyNote())
    const [dynType, setDynType] = useState('NoteDefaultForm')

    useEffect(() => {
        console.log('changeeeee to:', dynType)
    }, [dynType])

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
    let formComponent
    switch (dynType) {
        case 'NoteTxt':
            formComponent = (
                <NoteTxtForm onSaveNote={onSaveNote} handleChange={handleChange} noteEdit={noteEdit} />
            )
            break
        case 'NoteImg':
            formComponent = (
                <NoteImgForm onSaveNote={onSaveNote} handleChange={handleChange} noteEdit={noteEdit} />
            )
            break
        case 'NoteTodos':
            formComponent = (
                <NoteTodosForm onSaveNote={onSaveNote} handleChange={handleChange} noteEdit={noteEdit} />
            )
            break
        case 'NoteDefaultForm':
        default:
            formComponent = <NoteDefaultForm onClick={() => setDynType('NoteTxt')} />
    }

    return (
        <div className="form-note-edit">
            {formComponent}

            <div className="button-container">
                <button onClick={() => setDynType('NoteTxt')}>
                    <i className="fa-regular fa-message fa-lg"></i>
                </button>

                <button onClick={() => setDynType('NoteImg')}>
                    <i className="fa-regular fa-image fa-lg"></i>
                </button>

                <button onClick={() => setDynType('NoteTodos')}>
                    <i className="fa-regular fa-square-check fa-lg"></i>
                </button>
            </div>
        </div>
    )
}

//TODO: regular form text
// <form onSubmit={onSaveNote}>
//     <input
//         className="bar-input"
//         onChange={handleChange}
//         type="text"
//         name="title"
//         value={noteEdit.title}
//         id="title"
//         placeholder="Title"
//     />
//     <input
//         className="bar-input"
//         onChange={handleChange}
//         type="text"
//         name="txt"
//         id="text"
//         value={noteEdit.info.txt}
//         placeholder="Write note..."
//     />
//     <button>add</button>
// </form>
