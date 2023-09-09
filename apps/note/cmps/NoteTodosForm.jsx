const { useState } = React
import { utilService } from '../../../services/util.service.js'

export function NoteTodosForm({ onSaveNote, handleChange, noteEdit }) {
    const [items, setItems] = useState([{ id: utilService.makeId(), doneAt: null, txt: '' }])

    function handleAddItem() {
        setItems([...items, { id: utilService.makeId(), doneAt: null, txt: '' }])
    }

    function handleSubmit(ev) {
        ev.preventDefault()

        console.log('items', items)
        onSaveNote({
            title: noteEdit.title,
            todos: items.map((item) => ({ id: item.id, doneAt: item.doneAt, txt: item.txt })),
        })
    }

    function handleItemChange(ev, id) {
        const updatedItems = [...items]
        const itemIndex = updatedItems.findIndex((item) => item.id === id)
        if (itemIndex !== -1) {
            updatedItems[itemIndex].txt = ev.target.value
            setItems(updatedItems)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="bar-input"
                onChange={handleChange}
                type="text"
                name="title"
                value={noteEdit.title}
                placeholder="Title"
            />
            <ul className="items-line">
                {items.map((item) => (
                    <li className="item-line" key={item.id}>
                        <input
                            className="bar-input-list"
                            onChange={(ev) => handleItemChange(ev, item.id)}
                            type="text"
                            name={`txt-${item.id}`}
                            value={item.txt}
                            placeholder="List item"
                        />
                    </li>
                ))}
            </ul>
            <button className="btn-add-line " type="button" onClick={handleAddItem}>
                Add list item
            </button>
            <button type="submit" className="btn btn-close-and-send-form">
                Close
            </button>
        </form>
    )
}
