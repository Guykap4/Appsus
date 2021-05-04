import { utilsService } from './utils.service.js'
import { storageService } from './storage.service.js'
export const noteService = {
    query,
    // addNote,
    removeNote,
    // getNoteById,
    saveNote
}

//global vars
const KEY = 'notes'
var gNotes = ''
var gKind = ['text', 'image', 'todo', 'video']

//create the first notes to avoid errors
_createNotes()

//functions
function query(filterBy) {
    if (!filterBy) return Promise.resolve(gNotes)
    var { text, image, todo, video } = filterBy
    text = text ? text : 'Empty for now'
    image = image ? image : 'Empty for now'
    todo = todo ? todo : 'Empty for now'
    video = video ? video : 'Empty for now'
    const filteredNotes = gNotes.filter(note => {
        return note.type.includes(filterBy)
    })
    return Promise.resolve(filteredNotes)
}
//create set of 5 notes
function _createNotes() {
    var notes = storageService.loadFromStorage(KEY)
    if (!notes || !notes.length) {
        notes = []
        for (let i = 0; i < 5; i++) {
            var kind = gKind[i]
            notes.push(_createNote(kind))
        }
    }
    gNotes = notes;
    window.theNotes = gNotes;
    _saveNotesToStorage();
    console.log('gNotes', gNotes);
}

//delete note from gNotes
function removeNote(id) {
    let noteIdx = gNotes.findIndex(function (note) {
        return note.id === id
    })
    gNotes.splice(noteIdx, 1)
    _saveNotesToStorage();

    return Promise.resolve()

}
function saveNote(note) {
    return note.id ? _updateNote(note) : _addNote(note)
}

function _addNote(noteToAdd) {
    var note = _createNote(noteToAdd)
    gNotes.unshift(note)
    _saveNotesToStorage();
    return Promise.resolve(note)
}

function _updateNote(noteToUpdate) {
    var noteIdx = gNotes.findIndex(function (note) {
        return note.id === oteToUpdate.id;
    })
    gNotes.splice(noteIdx, 1, noteToUpdate)
    _saveNotesToStorage();
    return Promise.resolve(noteToUpdate)
}

//create one note according to kind
function _createNote(kind, note) {
    let cond
    console.log(kind)
    if (!note) {
        cond = kind
    } else {
        cond = note.type
    }
    console.log('cond', cond);
    switch (cond) {
        case 'text':
            return {
                id: note ? note.id : utilsService.makeId(),
                title: note ? note.title : 'text title',
                type: note ? note.type : 'text',
                content: note ? note.content : 'This is text note'
            }
        case 'image':
            return {
                id: note ? note.id : utilsService.makeId(),
                title: note ? note.title : 'text title',
                type: note ? note.type : 'image',
                url: note ? note.url : 'some url',
                content: note ? note.content : 'This is image note'
            }
        case 'video':
            return {
                id: note ? note.id : utilsService.makeId(),
                title: note ? note.title : 'video title',
                type: note ? note.type : 'video',
                url: note ? note.url : 'source url',
                content: note ? note.content : 'This is video note'
            }
        case 'todo':
            return {
                id: note ? note.id : utilsService.makeId(),
                title: note ? note.title : 'list title',
                type: note ? note.type : 'todo',
                content: note ? note.content : 'This is todo note'
            }
        default:
            return {
                id: note ? note.id : utilsService.makeId(),
                title: note ? note.title : 'text title',
                type: note ? note.type : 'text',
                content: note ? note.content : 'This is text note'
            }
        // return 'something'
    }
}

//save to storae
function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}
