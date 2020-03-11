import { getCriminals } from "./criminals/criminalDataProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";


getCriminals().then(CriminalList)

getConvictions().then(ConvictionSelect)


