let witnesses = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const witnessStateChangedEvent = new CustomEvent("witnessStateChanged")

    eventHub.dispatchEvent(witnessStateChangedEvent)
}

/*
    Allow other modules to get a copy of the application state
*/
export const useWitnesses = () => witnesses.slice()

/*
    Get the state of the witnesses from the API into the application
*/
export const getWitnesses = () => {
    return fetch('https://criminals.glassdale.us/witnesses')
        .then(response => response.json())
        .then(parsedWitnesses => {
            witnesses = parsedWitnesses
        })
}

export const saveWitnessStatement = statement => {
    return fetch('https://criminals.glassdale.us/witnesses', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(statement)
        
    })
    .then(getWitness)
    .then(dispatchStateChangeEvent)
}