import { NotePalette } from './NotePalette.jsx'
const { useState } = React

export function NoteBtnsPreview({ note, onPaletteButtonClick }) {
    const [isClickPalette, setIsClickPalette] = useState(false)

    function togglePalette() {
        setIsClickPalette(() => (prevIsClick) => !prevIsClick)
    }

    return (
        <React.Fragment>
            <button className="btn" onClick={() => togglePalette()}>
                <i className="fa-solid fa-palette fa-sm"></i>
            </button>
            {isClickPalette && <NotePalette note={note} onPaletteButtonClick={onPaletteButtonClick} />}
        </React.Fragment>
    )
}
