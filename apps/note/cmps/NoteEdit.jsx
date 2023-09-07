import { noteService } from '../services/note.service.js'
import { NoteDefaultForm } from './NoteDefaultForm.jsx'
import { NoteImgForm } from './NoteImgForm.jsx'
import { NoteTodosForm } from './NoteTodosForm.jsx'
import { NoteTxtForm } from './NoteTxtForm.jsx'

const { useState, useEffect } = React

export function NoteEdit({ onSetNotes }) {
    const [noteEdit, setNoteEdit] = useState(noteService.getEmptyNote())
    const [dynType, setDynType] = useState('')

    //FIXME: TODO THE BTN HOVER GOOD
    const [isFormActive, setIsFormActive] = useState(false)
    const [isExtend, setIsExtend] = useState(false)

    useEffect(() => {
        console.log('dynType:', dynType)
        setNoteEdit(noteService.getEmptyNote())
    }, [dynType])

    function toggleIsFormActive() {
        if (!isExtend) setIsFormActive((prevIsFormActive) => !prevIsFormActive)
    }

    function handleButtonClick(newDynType) {
        setDynType(newDynType)
        toggleIsFormActive()
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        console.log('field', field)

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
        noteEdit.title = note.title || ''
        noteEdit.type = dynType
        switch (dynType) {
            case 'NoteTxt':
                noteEdit.info.txt = note.text || ''
                break

            case 'NoteImg':
                noteEdit.info.txt = note.text || ''
                noteEdit.info.img = note.file || ''
                break

            case 'NoteTodos':
                noteEdit.info.txt = note.text || ''
                noteEdit.info.todos = note.todos || []
                break
        }
        console.log('noteEdit after! ! !', noteEdit)
        onSetNotes(noteEdit)
    }

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
            formComponent = <NoteDefaultForm onClick={() => handleButtonClick('NoteTxt')} />
    }

    return (
        <div className={`form-note-edit${isFormActive ? ' extend' : ''}`}>
            {formComponent}

            <div className="button-container ">
                <button className="btn btn-msg" onClick={() => handleButtonClick('NoteTxt')}>
                    <i className="fa-regular fa-message fa-xl"></i>
                </button>

                <button className="btn btn-img" onClick={() => handleButtonClick('NoteImg')}>
                    <i className="fa-regular fa-image fa-xl"></i>
                </button>

                <button className="btn btn-todos" onClick={() => handleButtonClick('NoteTodos')}>
                    <i className="fa-regular fa-square-check fa-xl"></i>
                </button>
            </div>
        </div>
    )
}
