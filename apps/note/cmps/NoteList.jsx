import { NoteCard } from '../cmps/NoteCard.jsx'

export function NoteList({
    notes,
    onPaletteButtonClick,
    onRemoveNote,
    onTogglePin,
    onSaveTodo,
    onEditNote,
}) {
    if (!notes || !notes.length) return

    const pinnedNotes = notes.filter((note) => note.isPinned)
    const unpinnedNotes = notes.filter((note) => !note.isPinned)

    function onSetEditNote(noteId) {
        onEditNote(noteId)
    }

    return (
        <section className="note-list">
            <p className="title-note-list">Pinned notes</p>
            <section className="note-pinned">
                {pinnedNotes.map((note) => (
                    <div key={note.id} className="card-box">
                        <button className="btn btn-edit" onClick={() => onSetEditNote(note.id)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>

                        <NoteCard
                            key={note.id}
                            note={note}
                            onPaletteButtonClick={onPaletteButtonClick}
                            onRemoveNote={onRemoveNote}
                            onTogglePin={onTogglePin}
                            onSaveTodo={onSaveTodo}
                            onEditNote={onEditNote}
                        />
                    </div>
                ))}
            </section>
            <p className="title-note-list">Last notes</p>
            <section className="note-unpinned">
                {unpinnedNotes.map((note) => (
                    <div key={note.id} className="card-box">
                        <button className="btn btn-edit" onClick={() => onEditNote(note.id)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <NoteCard
                            key={note.id}
                            note={note}
                            onPaletteButtonClick={onPaletteButtonClick}
                            onRemoveNote={onRemoveNote}
                            onTogglePin={onTogglePin}
                            onSaveTodo={onSaveTodo}
                            onEditNote={onEditNote}
                        />
                    </div>
                ))}
            </section>
        </section>
    )
}
