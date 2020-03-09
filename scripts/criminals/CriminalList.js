import { useCriminals } from "./criminalDataProvider.js";
import { Criminal } from "./Criminal.js";


const contentElement = document.querySelector(".criminalsContainer")
 
export const CriminalList = () => {
    const criminalObjectArray = useCriminals()

    for (const criminalObject of criminalObjectArray) {
    
        contentElement.innerHTML += Criminal(criminalObject)

        
    }

}