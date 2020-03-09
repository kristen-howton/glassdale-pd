export const Criminal = (criminalObject) => {
    return `
    <article class= "criminal">
        <p class= "criminal--name">${criminalObject.name} </p>   
        <section class= "criminal--age">Age: ${criminalObject.age}</section>
        <section class= "criminal--conviction">Crime: ${criminalObject.conviction}</section>
        <section class= "criminal--date">Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</section>
        <section>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</section>
    </article>
    `
}