import { getCriminals } from "./criminals/criminalDataProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import NoteForm from "./notes/NoteForm.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import "./notes/NoteList.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"

getCriminals().then(CriminalList)

getConvictions().then(ConvictionSelect)

DisplayNotesButton()

DisplayNoteFormButton()

NoteForm()