// Using querySelector method to get the elements for the input fields and their values, the section we will put all the "sticky notes" in and the reset/save buttons.
const saveButton = document.querySelector("#saveButton");
const resetButton = document.querySelector("#resetButton");
const storageResetButton = document.querySelector("#storageResetButton");
//Reset fields
//! Remember to remove the storage reset and reload
storageResetButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();})

//Load data on page load
loadData()

//Validation handler - Using an event listener to look for a submit in the form.
const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("submit", () => {
    event.preventDefault(); // Prevents page reload
    if (inputForm.checkValidity()) {
    addData(); // Call the addData function if the form is valid
    } else {
    inputForm.reportValidity(); // Form is invalid, displays error messages.
    }
})

function addData() {
    //Getting HTML Elements
    const taskDetailsBox = document.querySelector("#taskDetailsBox");
    const taskDeadlineDateBox = document.querySelector("#taskDeadlineDateBox");
    const taskDeadlineHourBox = document.querySelector("#taskDeadlineHourBox");

    //Getting values
    const taskDetailsValue = taskDetailsBox.value
    const taskDeadlineDateValue = taskDeadlineDateBox.value
    const taskDeadlineHourValue = taskDeadlineHourBox.value

    //#Load old data
    let storedNotes = localStorage.getItem("stickyNotes");
    let stickyNotesArray = [];
    if (storedNotes) stickyNotesArray = JSON.parse(storedNotes);

    //#Adding new note
    // Pushing the new values (single note array) into the array, converting to string, then storing
    let singleNote = [taskDetailsValue,taskDeadlineDateValue,taskDeadlineHourValue];
    stickyNotesArray.push(singleNote);
    let stickyNotesJSON = JSON.stringify(stickyNotesArray);
    localStorage.setItem("stickyNotes", stickyNotesJSON);

    //# Load updated data
    loadData()
}

//On refresh/page load - display all the notes
function loadData() {
    const stickyNoteArea = document.querySelector("#stickyNoteArea");
    //Assigning the stored data to storedNotes variable
    let storedNotes = localStorage.getItem("stickyNotes"); 
    //Checking if local storage (storedNotes) is empty. If it is, does not update.
    if (!storedNotes) return;

    //Parsing the stored data, then for every item in the array, updating the stickyNoteContent variable which will be used to update the innerHTML below.
    let stickyNotesArray = JSON.parse(storedNotes);
    let stickyNoteContent = '';
    for (const note of stickyNotesArray) {
    stickyNoteContent += 
    `
    <div class="stickyNoteDiv">
    <img src="/assets/stickyNote.png" class="stickyNoteImg" alt="Sticky Note">
    <p class="stickyNoteText"> ${note[0]} </p>
    <span class="stickyNoteDate"> ${note[1]} ${note[2]}</span>
    </div>
    `;
    }

    //Updating the inner HTML of the sticky note area section.
    stickyNoteArea.innerHTML = stickyNoteContent;
}