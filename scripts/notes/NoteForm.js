import { saveNote } from "./NoteProvider.js"
import { useCriminals } from "../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

let visibility = false

/*
adding an event listener to the note form button, which was a custom event
that we created and toggling the visibility.  visibility is set to false on line 7, 
and we do an if/else and references the contentTarget(notesContainer) 
If visibility is false then adds the class of invisible, else if visibility 
is true, then it removes the class of invisible
*/
eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#noteText").value
        const criminalId = document.querySelector("#criminalDropdown").value

        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            criminalId: parseInt(criminalId),
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.classList.add("invisible")
    const allCriminals = useCriminals()
    contentTarget.innerHTML = `
        <fieldset>
            <label class="label label--notes" for="noteText">Note:</label>
            <textarea id="noteText"></textarea>
        </fieldset>
        <fieldset>
            <label class="label label--notes" for="criminal">Criminal:</label>
                <select id="criminalDropdown">
                    <option value="0">Choose a criminal...</option>
                    ${
                        allCriminals.map(
                            (currentCriminalObject) => {
                                return `<option value="${currentCriminalObject.id}">${currentCriminalObject.name}</option>`
                        }
                    )
                }
                </select>
        </fieldset>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}