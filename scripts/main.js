import { getOfficers } from "./officers/officerProvider.js";
import { getCriminals } from "./criminals/criminalDataProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";

getOfficers()

getCriminals().then(CriminalList)

