import { utilsService } from './utils.service.js'
import { storageService } from './storage.service.js'

export const noteService = {
    queryPinned,
    queryUnpinned,
    removeNote,
    createNote,
    updateNote,
    togglePinned,
    noteColorChange,
    removeTodo,
    toggleDone,
    addTodo,
    copyToClipboard,
}

function addTodo(noteId) {
    const noteIdx = _getNoteIdx(noteId);
    gNotes[noteIdx].info.toDos.push({
        toDo: 'NEW!',
        isDone: false,
    })
    storageService.saveToStorage('notes', gNotes);
}

function removeTodo(toDoIdx, noteId) {
    const noteIdx = _getNoteIdx(noteId);
    gNotes[noteIdx].info.toDos.splice(toDoIdx, 1);
    storageService.saveToStorage('notes', gNotes);
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

function updateNote(id, val, toDoIdx) {

    if (toDoIdx) {
        console.log('hi');
        const noteIdx = _getNoteIdx(id)
        gNotes[noteIdx].info.toDos[toDoIdx].toDo = val;
        storageService.saveToStorage('notes', gNotes);
        return;
    }


    const idx = _getNoteIdx(id);
    gNotes[idx].info.caption = val;
    storageService.saveToStorage('notes', gNotes);
}

function queryPinned(searchBy) {
    const pinnedNotes = gNotes.filter(note => note.isPinned);

    if (searchBy) {
        const filteredNotes = pinnedNotes.filter((note, idx) => {
            if (note.type === 'toDoNote') {
                return note.info.toDos[idx].toDo.includes(searchBy)
            } else {
                return note.info.caption.includes(searchBy);
            }
        })
        return Promise.resolve(filteredNotes);
    }
    return Promise.resolve(pinnedNotes)
}

function queryUnpinned(searchBy) {

    const unpinnedNotes = gNotes.filter(note => !note.isPinned);

    if (searchBy) {
        const filteredNotes = unpinnedNotes.filter((note, idx) => {
            if (note.type === 'toDoNote') {
                return note.info.toDos[idx].toDo.includes(searchBy)
            } else {
                return note.info.caption.includes(searchBy);
            }
        })
        return Promise.resolve(filteredNotes);
    }
    return Promise.resolve(unpinnedNotes)
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

function copyToClipboard(noteId) {
    const noteIdx = _getNoteIdx(noteId)
    const note = gNotes[noteIdx]
    let copyTxt=''
    switch (note.type) {
        case 'txtNote':
            copyTxt = ['Note: ', note.info.caption]
            break;
        case 'toDoNote':
            note.info.toDos.map((todo) => {
                copyTxt += todo.toDo+'\n'
            })
            break;
        case 'imgNote':
            copyTxt = [note.info.caption, note.info.url]
            break;
        case 'vidNote':
            copyTxt = [note.info.caption, note.info.url]
            break;
    }

    return navigator.clipboard.writeText((copyTxt) + '\n\nCopied from Appsus MissKeep')
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