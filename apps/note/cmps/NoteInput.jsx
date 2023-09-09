import { noteService } from '../services/note.service.js'
import { NoteDefaultForm } from './NoteDefaultForm.jsx'
import { NoteImgForm } from './NoteImgForm.jsx'
import { NoteTodosForm } from './NoteTodosForm.jsx'
import { NoteTxtForm } from './NoteTxtForm.jsx'

const { useState, useEffect } = React

export function NoteInput({ onSetNotes }) {
    const [noteInput, setNoteInput] = useState(noteService.getEmptyNote())
    const [dynType, setDynType] = useState('')
    const [isFormActive, setIsFormActive] = useState(false)

    useEffect(() => {
        console.log('dynType:', dynType)
        setNoteInput(noteService.getEmptyNote())
    }, [dynType])

    function toggleIsFormActive() {
        console.log('isFormActive2', isFormActive)
        if (!isFormActive) setIsFormActive((prevIsFormActive) => !prevIsFormActive)
    }

    function handleButtonClick(newDynType) {
        setDynType(newDynType)
        toggleIsFormActive()
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        console.log('field', field)

        setNoteInput((prevNoteInput) => {
            if (field === 'txt') {
                return {
                    ...prevNoteInput,
                    info: { ...prevNoteInput.info, txt: value },
                }
            }
            return { ...prevNoteInput, [field]: value }
        })
    }

    function onSaveNote(note) {
        noteInput.title = note.title || ''
        noteInput.type = dynType
        switch (dynType) {
            case 'NoteTxt':
                noteInput.info.txt = note.text || ''
                break

            case 'NoteImg':
                noteInput.info.txt = note.text || ''
                noteInput.info.img = note.file || ''
                break

            case 'NoteTodos':
                noteInput.info.txt = note.text || ''
                noteInput.info.todos = note.todos || []
                break
        }
        onSetNotes(noteInput)
        setDynType('NoteDefaultForm')
        if (isFormActive) setIsFormActive((prevIsFormActive) => !prevIsFormActive)
    }

    let formComponent
    switch (dynType) {
        case 'NoteTxt':
            formComponent = (
                <NoteTxtForm onSaveNote={onSaveNote} handleChange={handleChange} noteInput={noteInput} />
            )
            break
        case 'NoteImg':
            formComponent = (
                <NoteImgForm onSaveNote={onSaveNote} handleChange={handleChange} noteInput={noteInput} />
            )
            break
        case 'NoteTodos':
            formComponent = (
                <NoteTodosForm
                    onSaveNote={onSaveNote}
                    handleChange={handleChange}
                    noteInput={noteInput}
                />
            )
            break
        case 'NoteDefaultForm':
        default:
            formComponent = <NoteDefaultForm onClick={() => handleButtonClick('NoteTxt')} />
    }

    return (
        <div className={`form-note-input${isFormActive ? ' extend' : ''}`}>
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
