//empty array that will store the note objects

let notes = []

//goes to DOM(index.html) and finds the first element with the class of container. Use eventHub for events
const eventHub = document.querySelector(".container")

//A custom event(event we create) to let other modules know that the POST occured (notes state changed) and yells it out for other modules that we let know
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

/*
    Allow other modules to get a copy of the application state, sorts the notes in order of when they were posted
*/
export const useNotes = () => notes.sort((current,next) => next.timestamp - current.timestamp).slice()

/*
    Get the state of the notes from the API into the application, tell me all of the objects that you have
    fills up the empty array on line 1 with the parsed notes
*/
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
}

/*
    saveNote takes a note object and turns it into JSON string, POST string to notes API
    then it getNotes 
    then lets other modules know that the notes state has been updated with a dispatchStateChangeEvent
*/

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
        
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

