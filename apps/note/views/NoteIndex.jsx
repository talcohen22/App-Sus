import { NoteList } from '../cmps/NoteList.jsx'
import { noteService } from '../services/note.service.js'
import { NoteInput } from '../cmps/NoteInput.jsx'
import { NoteEdit } from '../cmps/NoteEdit.jsx'
const { useState, useEffect } = React

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [bgClr, setBgClr] = useState({ backgroundColor: '', noteId: '' })
    const [isPin, setIsPin] = useState()
    const [isEdit, setIsEdit] = useState(false)
    const [note, setNote] = useState(null)

    useEffect(() => {
        noteService.query().then(setNotes)
    }, [])

    function onSetNotes(note) {
        if (note.info.img !== '') note.type = 'NoteImg'
        if (Array.isArray(note.info.txt)) note.type = 'NoteTodos'

        const { title, info } = note
        if (!title && !info.txt) return

        noteService.save(note).then(() => {
            noteService.query().then(setNotes)
        })
        note.type = 'NoteTxt'
    }

    function onPaletteButtonClick(color, noteId) {
        const noteIndex = notes.findIndex((note) => note.id === noteId)
        const updatedNotes = [...notes]
        updatedNotes[noteIndex] = {
            ...updatedNotes[noteIndex],
            style: {
                ...updatedNotes[noteIndex].style,
                backgroundColor: color,
            },
        }
        noteService
            .save(updatedNotes[noteIndex])
            .then(() => noteService.query())
            .then((updatedNotes) => {
                setNotes(updatedNotes)
                setBgClr({ backgroundColor: color, noteId: noteId })
            })
            .catch((error) => {
                console.error('Error onPaletteButtonClick:', error)
            })
    }

    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => {
            setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId))
        })
    }

    function onTogglePin(noteId) {
        const noteIndex = notes.findIndex((note) => note.id === noteId)
        const updatedNotes = [...notes]
        updatedNotes[noteIndex] = {
            ...updatedNotes[noteIndex],
            isPinned: !updatedNotes[noteIndex].isPinned,
        }
        noteService
            .save(updatedNotes[noteIndex])
            .then(() => noteService.query())
            .then((updatedNotes) => {
                setNotes(updatedNotes)
                setIsPin(updatedNotes[noteIndex].isPinned)
            })
            .catch((error) => {
                console.error('Error onTogglePin', error)
            })
    }

    function onSaveTodo(updatedTodos, noteId) {
        const noteIndex = notes.findIndex((note) => note.id === noteId)
        const updatedNotes = [...notes]
        updatedNotes[noteIndex] = {
            ...updatedNotes[noteIndex],
            info: { ...updatedNotes[noteIndex].info, todos: updatedTodos },
        }
        noteService
            .save(updatedNotes[noteIndex])
            .then(() => noteService.query())
            .then(setNotes)
            .catch((error) => {
                console.error('Error onSaveTodo', error)
            })
    }

    function onEditNote(noteId) {
        setIsEdit((prevIsEdit) => (prevIsEdit = true))

        const note = notes.find((note) => note.id === noteId)
        setNote(note)
    }

    function onCloseEditNote() {
        setIsEdit((prevIsEdit) => (prevIsEdit = false))
    }

    return (
        <main className="note-main-layout">
            <NoteInput onSetNotes={onSetNotes} />
            <NoteList
                notes={notes}
                onPaletteButtonClick={onPaletteButtonClick}
                onRemoveNote={onRemoveNote}
                onTogglePin={onTogglePin}
                onSaveTodo={onSaveTodo}
                onEditNote={onEditNote}
            />
            {isEdit && (
                <NoteEdit
                    note={note}
                    notes={notes}
                    onPaletteButtonClick={onPaletteButtonClick}
                    onRemoveNote={onRemoveNote}
                    onTogglePin={onTogglePin}
                    onSaveTodo={onSaveTodo}
                    onEditNote={onEditNote}
                    onCloseEditNote={onCloseEditNote}
                />
            )}
        </main>
    )
}
