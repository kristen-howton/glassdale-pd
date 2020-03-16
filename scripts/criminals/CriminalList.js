import { useCriminals } from "./criminalDataProvider.js";
import { Criminal } from "./Criminal.js";

//contentTarget is going to DOM (index.html) and finding the first element that has a class of criminalsContainer
const contentTarget = document.querySelector(".criminalsContainer")
//eventHub is going to the DOM (index.html) and finding the first element that has a class of container
const eventHub = document.querySelector(".container")


/*eventHub is the dom element with the class of container 
we are creating our own event and we are calling it crimeChosen
*/
eventHub.addEventListener("crimeChosen", event => {
    // Filter the list of criminal who committed the crime

    // We are storing the value of useCriminals in criminals, so we can use it later
    const criminals = useCriminals()

    //theCrimeThatWasChosen is the event(CrimeChosen) and the detail is the specific event(CrimeChosen)
    const theCrimeThatWasChosen = event.detail.chosenCrime

    /* We are only wanting the guiltyCriminals. We are using a method
    we are looking at the criminals, which is an array of objects that contains the criminals
    we want to filter through them. Filter is a method
    */
    const guiltyCriminals = criminals.filter(criminal => {
        /*we are filtering through the specific conviction and making it equal to theCrimeThatWasChosen.
        If the ..well that is wrong 
        */
        if (criminal.conviction === theCrimeThatWasChosen) {
            return true
        }
        return false
    })

    // Clear inner HTML of the criminal list (I did not write this..)
    contentTarget.innerHTML = ""

    // Build it up again (or this)
    for (const singleCriminal of guiltyCriminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
})

//we have a function named CriminalList and it does not accept parameters
export const CriminalList = () => {
    //
    const criminals = useCriminals()

    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
}