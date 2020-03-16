//convictions is curently an empty array

let convictions = []

//We are declaring a function called useConvictions and storing a copy of convictions

export const useConvictions = () => {
    return convictions.slice()
}


//getConvictions is a function that does not accept parameters
export const getConvictions = () => {
    //we are asking fetch to go to the api and get the information that is at this web address. It promises that it will come back
    return fetch("https://criminals.glassdale.us/crimes")
    //Then we are storing the response from the fetch in json, so we can read it. Also a promise
        .then(response => response.json()) 
        //then we are storing the returned value in convitions, so it can go to our empty array. Also a promise
        .then(
            parsedConvictions => {
                convictions = parsedConvictions
            }
        )}

