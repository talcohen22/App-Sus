export function NoteTodosForm({ onSaveNote, handleChange, noteEdit }) {
    return (
        <form onSubmit={onSaveNote}>
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
