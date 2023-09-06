import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
}

function query() {
    return storageService.query(NOTE_KEY)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [
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
        utilService.saveToStorage(NOTE_KEY, notes)
    }
}