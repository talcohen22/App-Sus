import { NoteList } from '../cmps/NoteList.jsx'

export function NoteIndex() {
    const notes = [
        {
            id: 'n101',
            createdAt: 1112222,
            type: 'NoteTxt',
            isPinned: true,
            style: {
                backgroundColor: '#00d',
            },
            info: {
                txt: 'Fullstack Me Baby!',
            },
        },
        {
            id: 'n102',
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'https://freesvg.org/img/food-maburger-royale.png',
                title: 'Bobi and Me',
            },
            style: {
                backgroundColor: '#00d',
            },
        },
        {
            id: 'n103',
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Get my stuff together',
                todos: [
                    { txt: 'Driving license', doneAt: null },
                    { txt: 'Coding power', doneAt: 187111111 },
                ],
            },
        },
    ]

    return (
        <main>
            <NoteList notes={notes} />
        </main>
    )
}
