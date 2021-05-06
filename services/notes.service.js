import { utilsService } from './utils.service.js'
import { storageService } from './storage.service.js'
export const noteService = {
    query,
    removeNote,
    createNote,
    updateNote,
}

function createNote(type, val) {
    let newNote = {};

    switch (type) {
        case 'txtNote':

            newNote = {
                id: utilsService.makeId(),
                type: 'txtNote',
                isPinned: false,
                info: {
                    caption: val,
                }
            }

            break;
        case 'imgNote':

            newNote = {
                id: utilsService.makeId(),
                type: 'imgNote',
                isPinned: false,
                info: {
                    caption: 'New Image',
                    url: val,
                }
            }

            break;
        case 'vidNote':

            newNote = {
                id: utilsService.makeId(),
                type: 'vidNote',
                isPinned: false,
                info: {
                    caption: 'New Video',
                    url: val,
                }
            }
            break;

        case 'toDoNote':

            newNote = {
                id: utilsService.makeId(),
                type: 'toDoNote',
                isPinned: false,
                info: {
                    toDos: [
                        val,
                    ]
                }
            }

            break;
        default:
            console.log('type:', type, 'val', val);
            break;
    }

    gNotes.unshift(newNote);
    storageService.saveToStorage('notes', gNotes);
}

function updateNote(id, val) {
    const idx = _getNoteIdx(id);
    gNotes[idx].info.caption = val;
    storageService.saveToStorage('notes', gNotes);
}

function query() {
    return Promise.resolve(gNotes)
}

function _getNoteIdx(id) {
    return gNotes.findIndex(note => note.id === id);
}

function removeNote(id) {
    const idx = _getNoteIdx(id);
    gNotes.splice(idx, 1);
    storageService.saveToStorage('notes', gNotes);
}

const gNotes = storageService.loadFromStorage('notes') || [
    {
        id: utilsService.makeId(),
        type: 'txtNote',
        isPinned: false,
        info: {
            caption: 'im a txt note'
        }
    },

    {
        id: utilsService.makeId(),
        type: 'imgNote',
        isPinned: false,
        info: {
            caption: 'im an img note',
            url: 'https://static.thaiflirting.com/site/img/slide2.jpg'
        }
    },

    {
        id: utilsService.makeId(),
        type: 'toDoNote',
        isPinned: false,
        info: {
            toDos: [
                'learn javaScript',
                'learn css',
                'learn html',
            ]
        }
    },

    {
        id: utilsService.makeId(),
        type: 'vidNote',
        isPinned: false,
        info: {
            caption: 'im a vid note',
            url: 'https://www.youtube.com/embed/watch?v=dQw4w9WgXcQ'
        }
    },
]