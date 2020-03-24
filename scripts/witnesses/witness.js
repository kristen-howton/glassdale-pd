export const Witness = witnessObject => {
    return `
        <section class="statement">
            <header>
                <h3>${witnessObject.name}</h3>
            </header>
            <p>${witnessObject.statements}</p>
        </section>
    `
}