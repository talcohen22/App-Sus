export function NoteTxtForm({ onSaveNote, handleChange, noteInput }) {
    function handleSubmit(ev) {
        ev.preventDefault()
        onSaveNote({
            title: noteInput.title,
            text: noteInput.info.txt,
        })
    }

    function autoExpandTextarea(element) {
        element.style.height = 'auto'
        element.style.height = element.scrollHeight + 'px'
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="bar-input"
                onChange={handleChange}
                type="text"
                name="title"
                value={noteInput.title}
                id="title"
                placeholder="Title"
            />
            <textarea
                className="bar-input"
                onChange={(e) => {
                    handleChange(e)
                    autoExpandTextarea(e.target)
                }}
                type="text"
                name="txt"
                id="text"
                value={noteInput.info.txt}
                placeholder="Write note..."
                style={{ resize: 'none' }}
            />
            <button type="submit" className="btn btn-close-and-send-form">
                Close
            </button>
        </form>
    )
}
