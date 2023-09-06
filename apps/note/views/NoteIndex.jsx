import { NoteList } from '../cmps/NoteList.jsx'
import { noteService } from '../../../services/note.service.js'

const { useState, useEffect } = React

export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        noteService.query().then(setNotes)
    }, [])

    return (
        <main className="note-main-layout">
            <NoteList notes={notes} />
        </main>
    )
}
