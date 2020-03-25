import { useNotes, deleteNote } from "./NoteProvider.js"
import { useCriminals } from "../criminals/criminalDataProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

/*
    State variables
*/
let visibility = false

contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, noteId] = clickEvent.target.id.split('--')
        deleteNote(noteId)
    }
})

/*
    Event handlers
*/
eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})


/*render is a function that takes no parameters.
It calls useNote(), which returns an array of note objects and useCriminals(), returns an array of criminal objects
visibility is set to false on line 11, and we do an if/else and references the contentTarget(notesContainer) 
If visibility is false then adds the class of invisible, else if visibility is true, then it removes the class of invisible
*/
const render = () => {
    const allTheNotes = useNotes()
    const criminalCollection = useCriminals()

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
/*
InnerHTML adds to the innerHTML of the contentTarget(noteContainer) on the DOM
allTheNotes is an array of note objects. We use .map, which is an array method 
We are creating an array that is mapped from the orginal array and returning an HTML representation of the Note
relatedCriminal is storing the value of going into the criminalCollection (array of criminal objects) 
uses the array method .find(), which looks at the criminal objects array and sees if the id matches the criminalId and if so, 
then it returns the first criminal objects that matched and if none matched then it would return null  
.join() turns an array of strings from the map method to a single string
*/
    contentTarget.innerHTML = allTheNotes.map(note => {
            const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
            return Note(note, relatedCriminal)
        }
    ).join("")
   
}

//NoteList runs the logic from render
export const NotesList = () => {
    render()
}