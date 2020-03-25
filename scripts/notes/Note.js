export const Note = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
            <p>${criminalObject.name}</p>
            <p>
                <button id="deleteNote--${noteObject.id}">Delete Note</button>
            </p>
        </section>
    `
}

//Note takes two paramters(place holders) and retuns a string of HTML of what a note will look like on the DOM