  
import { getWitnesses, useWitnesses } from "./witnessProvider.js"
import { Witness } from "./witness.js"

const contentTarget = document.querySelector(".statementContainer")
const eventHub = document.querySelector(".container")
let seeWitnessStatements = false

eventHub.addEventListener("witnessButtonClicked", customEvent => {
    seeWitnessStatements = !seeWitnessStatements

    if (seeWitnessStatements) {
        contentTarget.classList.remove("invisible")
        render()
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const render = () => {
    getWitnesses().then(
        () => {
            const allTheWitnesses = useWitnesses()

            contentTarget.innerHTML = allTheWitnesses.map(
                (currentWitnessStatementObject) => {
                    const statementHTML = Witness(currentWitnessStatementObject)
                    return statementHTML
                }
            ).join("")
        }
    )
}



