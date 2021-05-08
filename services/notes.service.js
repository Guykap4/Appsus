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
                color: 'rgb(255 243 191)',
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
                color: 'rgb(255 243 191)',
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
                color: 'rgb(255 243 191)',
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
                color: 'rgb(255 243 191)',
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

    if (toDoIdx || toDoIdx === 0) {
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
                return note.info.toDos[idx].toDo.toLowerCase().includes(searchBy.toLowerCase())
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
                return note.info.toDos[idx].toDo.toLowerCase().includes(searchBy.toLowerCase())
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

    return navigator.clipboard.writeText(copyTxt)
}

const gNotes = storageService.loadFromStorage('notes') || [
    {
        id: utilsService.makeId(),
        type: 'txtNote',
        color: '#db4b4b',
        isPinned: false,
        info: {
            caption: `Don't forget to call mom for an advise on react!`
        }
    },

    {
        id: utilsService.makeId(),
        type: 'txtNote',
        color: '#5cc077',
        isPinned: true,
        info: {
            caption: `Dentist at 07/04/2043`
        }
    },

    {
        id: utilsService.makeId(),
        type: 'imgNote',
        color: '#62a8e4',
        isPinned: false,
        info: {
            caption: 'First trip after corona...',
            url: 'https://www.traveldailymedia.com/assets/2020/01/thailandblogger-1024x683.jpg'
        }
    },

    {
        id: utilsService.makeId(),
        type: 'toDoNote',
        color: '#fff3bf',
        isPinned: true,
        info: {
            toDos: [{
                toDo: 'learn javaScript',
                isDone: true,
            },
            {
                toDo: 'learn CSS',
                isDone: true,
            },
            {
                toDo: 'learn HTML',
                isDone: true,
            },
            {
                toDo: 'learn React',
                isDone: true,
            },
            {
                toDo: 'learn NodeJS',
                isDone: false,
            },
            {
                toDo: 'learn Redux',
                isDone: false,
            },
            ]
        }
    },

    {
        id: utilsService.makeId(),
        type: 'toDoNote',
        color: '#ffa24a',
        isPinned: true,
        info: {
            toDos: [{
                toDo: 'Eggs',
                isDone: false,
            },
            {
                toDo: 'Milk',
                isDone: false,
            },
            {
                toDo: 'Butter',
                isDone: false,
            },
            {
                toDo: 'Flour',
                isDone: false,
            },
            {
                toDo: 'Baby oil',
                isDone: false,
            },
            {
                toDo: 'Soup almonds',
                isDone: false,
            },
            ]
        }
    },

    {
        id: utilsService.makeId(),
        type: 'vidNote',
        color: '#ff65a3',
        isPinned: false,
        info: {
            caption: 'Best video ever happend to mankind!',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        }
    },

    {
        id: utilsService.makeId(),
        type: 'txtNote',
        color: '#db4b4b',
        isPinned: false,
        info: {
            caption: `I wanna be the very best
            Like no one ever was
            To catch them is my real test
            To train them is my causeI will travel across the land
            Searching far and wide
            Teach Pokemon to understand
            The power that's insidePokemon! Gotta catch 'em all
            It's you and me
            I know it's my destiny
            Pokemon! Oh, you're my best friend
            In a world we must defend`
        }
    },
]