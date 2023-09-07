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
        console.log('note shitttt', note.type)

        if (note.info.img !== '') note.type = 'NoteImg'

        const { title, info } = note
        if (!title && !info.txt) return

        console.log('noteeeeeeeeeeee', note)
        noteService.save(note).then(() => {
            noteService.query().then(setNotes)
        })
    }

    return (
        <main className="note-main-layout">
            <NoteEdit onSetNotes={onSetNotes} />
            <NoteList notes={notes} />
        </main>
    )
}
