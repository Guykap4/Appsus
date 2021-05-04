import { utilsService } from './utils.service.js'
import { storageService } from './storage.service.js'
export const noteService = {
    query,
    // addNote,
    removeNote,
    // getNoteById,
    // saveNote
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

//create one note according to kind
function _createNote(kind) {
    switch (kind) {
        case 'text':
            return {
                id: utilsService.makeId(),
                title: 'text title',
                type: 'text',
                content: 'This is text note'
            }
        case 'image':
            return {
                id: utilsService.makeId(),
                title:'image title',
                type: 'image',
                url:'some url',
                content: 'This is image note'
            }
        case 'video':
            return {
                id: utilsService.makeId(),
                title:'video title',
                type: 'video',
                url:'source url',
                content: 'This is video note'
            }
        case 'todo':
            return {
                id: utilsService.makeId(),
                title:'list title',
                type: 'todo',
                content: 'This is todo note'
            }
        default:
            return {
                id: utilsService.makeId(),
                title:'text title',
                type: 'text',
                content: 'This is text note'
            }
        // return 'something'
    }
}

//save to storae
function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}
