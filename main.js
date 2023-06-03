"use strict";

//Validation handler
function validationHandler() {
    event.preventDefault();
    //checkValidity returns true if the form is valid
    if (inputForm.checkValidity()) addData(); 
    else inputForm.reportValidity();
}

//Update the minDate every minute
setInterval(setMinDate, 60_000);

//Sets the min property of the date input
function setMinDate() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day =  String(currentDate.getDate()).padStart(2, '0');
    let hours =  String(currentDate.getHours()).padStart(2, '0');
    let minutes =  String(currentDate.getMinutes()).padStart(2, '0');
    let formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    
    const taskDeadlineDateBox = document.querySelector("#taskDeadlineDateBox");
    taskDeadlineDateBox.min = formattedDateTime;
}

//Reset button to remove all the notes from storage and refresh the page
function resetNotes(){
    localStorage.clear();
    location.reload();
}

function addData() {
    // Getting HTML Elements
    const taskDetailsBox = document.querySelector("#taskDetailsBox");
    const taskDeadlineDateBox = document.querySelector("#taskDeadlineDateBox");

    // Getting values
    let taskDetailsValue = taskDetailsBox.value
    let taskDeadlineDateValue = taskDeadlineDateBox.value

    // Changing the date format
    let hourArray = taskDeadlineDateValue.split("T")[1];
    let dateArray = taskDeadlineDateValue.split("T")[0];
    let newDateArray = dateArray.split("-");
    taskDeadlineDateValue = `${newDateArray[2]}-${newDateArray[1]}-${newDateArray[0]} ${hourArray}`;

    // Load old data from localStorage
    let storedNotes = localStorage.getItem("stickyNotes");
    let stickyNotesArray = [];
    if (storedNotes) stickyNotesArray = JSON.parse(storedNotes);

    // Adding new note
    // Pushing the new values (single note array) into the array, converting to string, then storing. Adding boolean at the end to determine if it has been displayed already (Will be used to determine animation)
    let singleNote = [taskDetailsValue, taskDeadlineDateValue, false];
    stickyNotesArray.push(singleNote);
    let stickyNotesJSON = JSON.stringify(stickyNotesArray);
    localStorage.setItem("stickyNotes", stickyNotesJSON);

    // Load updated data
    loadData();

    //Clearing the fields after submit
    document.querySelector("#inputForm").reset();
    
}

function loadData() {
    //Assigning the stored data to storedNotes variable
    let storedNotes = localStorage.getItem("stickyNotes"); 

    //Checking if local storage (storedNotes) is empty. If it is, does not update.
    if (!storedNotes) return;

    //Parsing the stored data, then for every item in the array, updating the stickyNoteContent variable which will be used to update the innerHTML below.
    let stickyNotesArray = JSON.parse(storedNotes);
    let stickyNoteContent = '';

    //For each "sticky note" inside the array, we will display the below string with interpolated values for the text, date and time. Since the position of those values are constant within the array we can use their index to call them.
    for (let i = 0; i < stickyNotesArray.length; i++) {
        const note = stickyNotesArray[i];
        if (!note[2]) {
            stickyNoteContent += 
            `
            <div class="stickyNoteDiv fadeInAnimation">
            <i class="bi bi-x-square"></i>
            <img src="/assets/stickyNote.png" class="stickyNoteImg" alt="Sticky Note">
            <p class="stickyNoteText"> ${note[0]}</p>
            <span class="stickyNoteDate">${note[1]}</span>
            </div>
            `;

            // Update the boolean to indicate that the note has been displayed
            stickyNotesArray[i][2] = true;
        } else {
            stickyNoteContent +=
            `
            <div class="stickyNoteDiv">
            <i class="bi bi-x-square"></i>
            <img src="/assets/stickyNote.png" class="stickyNoteImg" alt="Sticky Note">
            <p class="stickyNoteText"> ${note[0]}</p>
            <span class="stickyNoteDate">${note[1]}</span>
            </div>
            `;
        }
    }
    //Updating the inner HTML of the sticky note area section.
    const stickyNoteArea = document.querySelector("#stickyNoteArea");
    stickyNoteArea.innerHTML = stickyNoteContent;

    //Saving the changes to the boolean flag
    let stickyNotesJSON = JSON.stringify(stickyNotesArray);
    localStorage.setItem("stickyNotes", stickyNotesJSON);
}

// Add event listener for deleting notes by clicking the X, to the container using event delegation
const stickyNoteContainer = document.querySelector("#stickyNoteArea");
stickyNoteContainer.addEventListener("click", (event) => {if (event.target.matches("i")) deleteNote(event);});

function deleteNote(event) {
    //# Removing from DOM
    let stickyNote = ''; 
    stickyNote = event.target.parentElement; 
    stickyNote.style.animation = "fadeOutAnimation 0.5s forwards";
    setTimeout(() => stickyNote.remove(), 700)
    
    //# Removing from localStorage
    //Loading the array from storage
    let storedNotes = localStorage.getItem("stickyNotes"); 
    let stickyNotesArray = JSON.parse(storedNotes);
    
    //Splicing the selected item (sticky note) from the array
    let stickyNoteArea = stickyNote.parentElement;
    const index = Array.from(stickyNoteArea.children).indexOf(stickyNote);
    stickyNotesArray.splice(index, 1);

    //Saving the deletion
    let stickyNotesJSON = JSON.stringify(stickyNotesArray);
    localStorage.setItem("stickyNotes", stickyNotesJSON);
}

