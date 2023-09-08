export function NotePalette({ note, onPaletteButtonClick }) {
    const palette = [
        { koral: '#faafa8' },
        { pitch: '#f39f76' },
        { banana: '#fff8b8' },
        { grass: '#e2f6d3' },
        { greenish: '#b4ddd3' },
        { sky: '#d4e4ed' },
        { storm: '#aeccdc' },
        { oval: '#d3bfdb' },
        { pink: '#f6e2dd' },
        { none: '#fff' },
    ]

    function handlePaletteButtonClick(color, noteId) {
        if (onPaletteButtonClick) {
            onPaletteButtonClick(color, noteId)
        }
    }
    return (
        <div className="color-buttons">
            {palette.map((colorOption, index) => (
                <button
                    key={index}
                    className="color-button"
                    style={{ backgroundColor: Object.values(colorOption)[0] }}
                    onClick={() =>
                        handlePaletteButtonClick(Object.values(colorOption)[0], note.id)
                    }></button>
            ))}
        </div>
    )
}
