const { useState, useRef, useEffect } = React

export function NoteImgForm({ onSaveNote, handleChange, noteEdit }) {
    const [file, setFile] = useState()
    const fileInputRef = useRef(null)

    function handleInputFile(ev) {
        console.log(ev.target.files)
        let imgUrl = URL.createObjectURL(ev.target.files[0])
        setFile(imgUrl)
    }

    useEffect(() => {
        if (fileInputRef.current) {
            console.log('fileInputRef.current', fileInputRef.current)
            fileInputRef.current.click()
        }
    }, [])

    function handleSubmit(ev) {
        ev.preventDefault()
        onSaveNote({
            title: noteEdit.title,
            text: noteEdit.info.txt,
            file,
        })
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
