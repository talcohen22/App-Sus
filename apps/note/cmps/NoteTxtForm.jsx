export function NoteTxtForm({ onSaveNote, handleChange, noteEdit }) {
    function handleSubmit(ev) {
        ev.preventDefault()
        onSaveNote({
            title: noteEdit.title,
            text: noteEdit.info.txt,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="bar-input"
                onChange={handleChange}
                type="text"
                name="title"
                value={noteEdit.title}
                id="title"
                placeholder="Title"
            />
            <input
                className="bar-input"
                onChange={handleChange}
                type="text"
                name="txt"
                id="text"
                value={noteEdit.info.txt}
                placeholder="Write note..."
            />
            <button>add</button>
        </form>
    )
}
