import { NoteList } from '../cmps/NoteList.jsx'
import { noteService } from '../../../services/note.service.js'
import { NoteEdit } from '../cmps/NoteEdit.jsx'

const { useState, useEffect } = React

export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        noteService.query().then(setNotes)
    }, [])

    function onSetNotes(note) {
        console.log('note bitch', note)
        if (note.info.img !== '') note.type = 'NoteImg'
        if (note.info.txt === Array) note.type = 'NoteTodos'

        const { title, info } = note
        if (!title && !info.txt) return

        noteService.save(note).then(() => {
            noteService.query().then(setNotes)
        })
        note.type = 'NoteTxt'
    }

    return (
        <main className="note-main-layout">
            <NoteEdit onSetNotes={onSetNotes} />
            <NoteList notes={notes} />
        </main>
    )
}
