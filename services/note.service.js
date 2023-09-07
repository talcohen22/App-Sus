import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    save,
    get,
    getEmptyNote,
}

function query() {
    return storageService.query(NOTE_KEY)
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
                    backgroundColor: '#ff5733',
                },
                info: {
                    txt: 'New adventures await!',
                },
            },

            {
                id: 'n103',
                type: 'NoteTodos',
                isPinned: false,
                title: 'Weekend Plans',
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
                isPinned: true,
                style: {
                    backgroundColor: '#00d',
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
                    backgroundColor: '#a832ff',
                },
            },
            {
                id: 'n105',
                type: 'NoteImg',
                isPinned: false,
                title: 'Travel Goals',
                info: {
                    img: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Cacio-e-Pepe-e44b9f8.jpg?quality=90&resize=556,505',
                },
                style: {
                    backgroundColor: '#00d',
                },
            },

            {
                id: 'n108',
                type: 'NoteImg',
                isPinned: false,
                title: 'Soccer Game Tomorrow',
                info: {
                    img: 'https://image-and-file-storage.storage.googleapis.com/images/library/large/trek-wahoo-26-345352-3363194-1.png',
                },
                style: {
                    backgroundColor: '#a832ff',
                },
            },
            {
                id: 'n106',
                type: 'NoteTodos',
                isPinned: false,
                title: 'Grocery List',
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
                isPinned: true,
                style: {
                    backgroundColor: '#ff5733',
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
                    backgroundColor: '#00d',
                },
                info: {
                    txt: 'Buy tickets for concert!',
                },
            },

            {
                id: 'n112',
                type: 'NoteTodos',
                isPinned: false,
                title: 'Home Improvement',
                info: {
                    todos: [
                        { txt: 'Paint living room', doneAt: null },
                        { txt: 'Fix leaky faucet', doneAt: null },
                    ],
                },
            },
            {
                id: 'n113',
                createdAt: 1631313600,
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#ff5733',
                },
                info: {
                    txt: 'Plan vacation itinerary.',
                },
            },
            {
                id: 'n114',
                type: 'NoteImg',
                isPinned: false,
                title: 'Nature Retreat',
                info: {
                    img: 'https://img.ice.co.il/giflib/news/15102214.jpg',
                },
                style: {
                    backgroundColor: '#a832ff',
                },
            },
            {
                id: 'n111',
                type: 'NoteImg',
                isPinned: false,
                title: 'Healthy Eating Plan',
                info: {
                    img: 'https://www.codingninjas.com/blog/wp-content/uploads/2020/10/Blog-2020-10-01T172831.659.png',
                },
                style: {
                    backgroundColor: '#00d',
                },
            },
            {
                id: 'n115',
                type: 'NoteTodos',
                isPinned: false,
                title: 'Home Gardening',
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
                    backgroundColor: '#00d',
                },
                info: {
                    txt: 'Call the plumber!',
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
                    backgroundColor: '#00d',
                },
            },
            {
                id: 'n118',
                type: 'NoteTodos',
                isPinned: false,
                title: 'Fitness Goals',
                info: {
                    todos: [
                        { txt: 'Go for a run', doneAt: null },
                        { txt: 'Do yoga', doneAt: null },
                    ],
                },
            },
            {
                id: 'n119',
                createdAt: 1631486400,
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#ff5733',
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
                    backgroundColor: '#a832ff',
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
            backgroundColor: '',
        },
        title: '',
        info: {
            txt: '',
            img: '',
            todos: [],
        },
    }
}
