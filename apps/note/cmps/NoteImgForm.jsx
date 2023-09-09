const { useState, useRef, useEffect } = React

export function NoteImgForm({ onSaveNote, handleChange, noteInput }) {
    const [file, setFile] = useState()
    const fileInputRef = useRef(null)

    function handleInputFile(ev) {
        let imgUrl = URL.createObjectURL(ev.target.files[0])
        setFile(imgUrl)
    }

    useEffect(() => {
        console.log('note', noteInput)
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }, [])

    function handleSubmit(ev) {
        ev.preventDefault()
        onSaveNote({
            title: noteInput.title,
            text: noteInput.info.txt,
            file,
        })
    }

    function autoExpandTextarea(element) {
        element.style.height = 'auto'
        element.style.height = element.scrollHeight + 'px'
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={handleInputFile}
                ref={fileInputRef}
                style={{ display: 'none' }}
                name="file"
            />
            {file && <img src={file} alt="Selected Image" />}

            <input
                className="bar-input "
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
