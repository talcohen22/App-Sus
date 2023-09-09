import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    save,
    get,
    remove,
    getEmptyNote,
}

function query() {
    return storageService.query(NOTE_KEY)
}
function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: 'n101',
                createdAt: 1630921200,
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#faafa8',
                },
                info: {
                    txt: 'New adventures await!',
                },
            },

            {
                id: 'n103',
                type: 'NoteTodos',
                isPinned: true,
                title: 'Weekend Plans',
                style: {
                    backgroundColor: '#b4ddd3',
                },
                info: {
                    todos: [
                        { txt: 'Hiking with friends', doneAt: null },
                        { txt: 'Picnic by the lake', doneAt: 1631007600 },
                        { txt: 'call friends', doneAt: null },
                        { txt: 'buy pasta', doneAt: 1631007600 },
                    ],
                },
            },
            {
                id: 'n104',
                createdAt: 1631054400,
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: '#faafa8',
                },
                info: {
                    txt: 'Remember to call mom!',
                },
            },
            {
                id: 'n102',
                type: 'NoteImg',
                isPinned: false,
                title: 'Scenic Beauty',
                info: {
                    img: 'https://freesvg.org/img/food-maburger-royale.png',
                },
                style: {
                    backgroundColor: '#b4ddd3',
                },
            },

            {
                id: 'n108',
                type: 'NoteImg',
                isPinned: true,
                title: 'Soccer Game Tomorrow',
                info: {
                    img: 'https://images.augustman.com/wp-content/uploads/sites/3/2022/12/22161604/messi-vs-ronaldo-1.jpeg?tr=w-1200,h-900',
                },
                style: {
                    backgroundColor: '#aeccdc',
                },
            },
            {
                id: 'n106',
                type: 'NoteTodos',
                isPinned: false,
                title: 'Grocery List',
                style: {
                    backgroundColor: '#aeccdc',
                },
                info: {
                    todos: [
                        { txt: 'Milk', doneAt: null },
                        { txt: 'Eggs', doneAt: null },
                    ],
                },
            },
            {
                id: 'n107',
                createdAt: 1631140800,
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: '#aeccdc',
                },
                info: {
                    txt: 'Practice guitar for an hour.',
                },
            },
            {
                id: 'n109',
                type: 'NoteTodos',
                isPinned: false,
                title: 'Work Tasks',
                style: {
                    backgroundColor: '#fff8b8',
                },
                info: {
                    todos: [
                        { txt: 'Finish project report', doneAt: null },
                        { txt: 'Send client emails', doneAt: null },
                    ],
                },
            },
            {
                id: 'n110',
                createdAt: 1631227200,
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#fff',
                },
                info: {
                    txt: 'Buy tickets for concert!',
                },
            },

            {
                id: 'n112',
                type: 'NoteTodos',
                isPinned: true,
                title: 'Home Improvement',
                style: {
                    backgroundColor: '#aeccdc',
                },
                info: {
                    todos: [
                        { txt: 'Paint living room', doneAt: null },
                        { txt: 'Fix leaky faucet', doneAt: 1631313600 },
                    ],
                },
            },
            {
                id: 'n113',
                createdAt: 1631313600,
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#fff8b8',
                },
                info: {
                    txt: 'Plan vacation itinerary.',
                },
            },
            {
                id: 'n115',
                type: 'NoteTodos',
                isPinned: false,
                title: 'Home Gardening',
                style: {
                    backgroundColor: '#b4ddd3',
                },
                info: {
                    todos: [
                        { txt: 'Plant flowers', doneAt: null },
                        { txt: 'Water the garden', doneAt: null },
                    ],
                },
            },
            {
                id: 'n116',
                createdAt: 1631400000,
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#f6e2dd',
                },
                info: {
                    txt: 'Call the plumber!',
                },
            },

            {
                id: 'n118',
                type: 'NoteTodos',
                isPinned: false,
                title: 'Fitness Goals',
                style: {
                    backgroundColor: '#d4e4ed',
                },
                info: {
                    todos: [
                        { txt: 'Go for a run', doneAt: null },
                        { txt: 'Do yoga', doneAt: null },
                    ],
                },
            },
            {
                id: 'n117',
                type: 'NoteImg',
                isPinned: false,
                title: 'Packing for a Trip',
                info: {
                    img: 'https://www.visitagnes1770.com.au/wp-content/uploads/2020/06/Agnes-Water-Main-Beach.jpg',
                },
                style: {
                    backgroundColor: '#f6e2dd',
                },
            },
            {
                id: 'n119',
                createdAt: 1631486400,
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#f6e2dd',
                },
                info: {
                    txt: 'Write a thank-you letter.',
                },
            },
            {
                id: 'n120',
                type: 'NoteImg',
                isPinned: false,
                title: 'Pizza Night!',
                info: {
                    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Skateboarder_in_the_air.jpg',
                },
                style: {
                    backgroundColor: '#d4e4ed',
                },
            },
        ];

        utilService.saveToStorage(NOTE_KEY, notes)
    }
}

function getEmptyNote() {
    return {
        createdAt: Date.now(),
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: '#fff',
        },
        title: '',
        info: {
            txt: '',
            img: '',
            todos: [],
        },
    }
}
