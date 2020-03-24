import { useNotes } from "./NoteProvider.js"
import { useCriminals } from "../criminals/criminalDataProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

/*
    State variables
*/
let visibility = false

/*
    Event handlers
*/
eventHub.addEventListener("noteStateChanged", customEvent => {
    const allTheNotes = useNotes()
    const criminalCollection = useCriminals()
    render(allTheNotes, criminalCollection)
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

const render = (allTheNotes, criminalCollection) => {
    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }


        contentTarget.innerHTML = allTheNotes.map(note => {
                const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
                return Note(note, relatedCriminal)
            }
        ).join("")
   
        }
export const NotesList = () => {
    const allTheNotes = useNotes()
    const criminalCollection = useCriminals()

    render(allTheNotes, criminalCollection)
}