  
import { getCriminals } from "./criminals/criminalDataProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NotesList } from "./notes/NoteList.js"
import "./criminals/knownAssociatesDialog.js"

getCriminals().then(CriminalList)
getConvictions().then(ConvictionSelect)

DisplayNotesButton()
DisplayNoteFormButton()
NoteForm()
NotesList()
