import { NoteCard } from '../cmps/NoteCard.jsx'

export function NoteList({
    notes,
    onPaletteButtonClick,
    onRemoveNote,
    onTogglePin,
    onSaveTodo,
    onEditNote,
}) {
    if (!notes || !notes.length) return <div> loading.. </div>

    const pinnedNotes = notes.filter((note) => note.isPinned)
    const unpinnedNotes = notes.filter((note) => !note.isPinned)

    return (
        <section className="note-list">
            <p className="title-note-list">Pinned notes</p>
            <section className="note-pinned">
                {pinnedNotes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onPaletteButtonClick={onPaletteButtonClick}
                        onRemoveNote={onRemoveNote}
                        onTogglePin={onTogglePin}
                        onSaveTodo={onSaveTodo}
                        onEditNote={onEditNote}
                    />
                ))}
            </section>
            <p className="title-note-list">Last notes</p>
            <section className="note-unpinned">
                {unpinnedNotes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onPaletteButtonClick={onPaletteButtonClick}
                        onRemoveNote={onRemoveNote}
                        onTogglePin={onTogglePin}
                        onSaveTodo={onSaveTodo}
                        onEditNote={onEditNote}
                    />
                ))}
            </section>
        </section>
    )
}
