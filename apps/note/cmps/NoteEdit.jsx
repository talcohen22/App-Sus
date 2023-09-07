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
        console.log('target', target)
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

    function onSaveNote(note) {
        console.log('note typrrrrrrrrrrrrrrrr', note)

        noteEdit.title = note.title
        noteEdit.info.txt = note.text
        noteEdit.info.img = note.file || ''

        onSetNotes(noteEdit)
    }
    console.log('noteEdit.title', noteEdit.title)
    console.log('noteEdit.info.txt', noteEdit.info.txt)
    console.log('noteEdit.info.img', noteEdit.info.img)

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
