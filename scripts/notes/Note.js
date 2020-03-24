export const Note = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
            <p>${criminalObject.name}</p>
        </section>
    `
}