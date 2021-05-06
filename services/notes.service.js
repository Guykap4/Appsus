import { utilsService } from './utils.service.js'
import { storageService } from './storage.service.js'
export const noteService = {
    query,
    removeNote,
    createNote,
    updateNote,
    togglePinned,
    noteColorChange,
    removeTodo,
    toggleDone,
}

function removeTodo(toDoIdx, NoteId) {
    const noteIdx = _getNoteIdx(NoteId);
    gNotes[noteIdx].info.toDos.splice(toDoIdx, 1);
}

function createNote(type, val) {
    let newNote = {};

    switch (type) {
        case 'txtNote':

            newNote = {
                id: utilsService.makeId(),
                type: 'txtNote',
                color: 'yellow',
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
                color: 'yellow',
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
                color: 'yellow',
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
                color: 'yellow',
                isPinned: false,
                info: {
                    toDos: [{
                        toDo: val,
                        isDone: false,
                    }
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

function togglePinned(id) {
    const noteId = _getNoteIdx(id)
    gNotes[noteId].isPinned = !gNotes[noteId].isPinned
    storageService.saveToStorage('notes', gNotes);
}

function noteColorChange(id, color) {
    const noteIdx = _getNoteIdx(id)
    gNotes[noteIdx].color = color
    storageService.saveToStorage('notes', gNotes);

}


function toggleDone(toDoIdx, NoteId) {
    const idx = _getNoteIdx(NoteId);
    gNotes[idx].info.toDos[toDoIdx].isDone = !gNotes[idx].info.toDos[toDoIdx].isDone
    storageService.saveToStorage('notes', gNotes);
}

const gNotes = storageService.loadFromStorage('notes') || [
    {
        id: utilsService.makeId(),
        type: 'txtNote',
        color: '',
        isPinned: false,
        info: {
            caption: 'im a txt note'
        }
    },

    {
        id: utilsService.makeId(),
        type: 'imgNote',
        color: '',
        isPinned: false,
        info: {
            caption: 'im an img note',
            url: 'https://static.thaiflirting.com/site/img/slide2.jpg'
        }
    },

    {
        id: utilsService.makeId(),
        type: 'toDoNote',
        color: '',
        isPinned: false,
        info: {
            toDos: [{
                toDo: 'learn javaScript',
                isDone: true,
            },
            {
                toDo: 'learn CSS',
                isDone: false,
            },
            {
                toDo: 'learn HTML',
                isDone: false,
            }
            ]
        }
    },

    {
        id: utilsService.makeId(),
        type: 'vidNote',
        color: '',
        isPinned: false,
        info: {
            caption: 'im a vid note',
            url: 'https://www.youtube.com/embed/watch?v=dQw4w9WgXcQ'
        }
    },
]