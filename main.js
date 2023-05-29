"use strict";

// Using querySelector method to get the elements for the input fields and their values, the section we will put all the "sticky notes" in and the reset/save buttons.
const saveButton = document.querySelector("#saveButton");
const resetButton = document.querySelector("#resetButton");
const storageResetButton = document.querySelector("#storageResetButton");

//Load data on page load and display all
loadData();

//#Validation handlers
//Validating date and time seperately since their minimum changes dynamically
//Checks for inputs to the inputform
const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("input", () => {
    validateDateInput();
    validateHourInput();
});

// Using an event listener to look for a submit in the form.
inputForm.addEventListener("submit", () => {
    event.preventDefault(); // Prevents page reload
    if (inputForm.checkValidity()) {
    addData(); // Call the addData function if the form is valid
    } else {
    inputForm.reportValidity(); // Form is invalid, displays error messages.
    }
})

//Reset button to remove all the notes from storage and refresh the page
resetButton.addEventListener("click", () => { 
    localStorage.clear();
    location.reload();
})

function addData() {
    //Getting HTML Elements
    const taskDetailsBox = document.querySelector("#taskDetailsBox");
    const taskDeadlineDateBox = document.querySelector("#taskDeadlineDateBox");
    const taskDeadlineHourBox = document.querySelector("#taskDeadlineHourBox");

   
    //Getting values
    let taskDetailsValue = taskDetailsBox.value
    let taskDeadlineDateValue = taskDeadlineDateBox.value
    let taskDeadlineHourValue = taskDeadlineHourBox.value

    //Changing the date format
    let dateArray = taskDeadlineDateValue.split("-");
    taskDeadlineDateValue = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`

    //#Load old data from localStorage
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
    //In order for the animation to occur per div, we will manipulate the DOM every time there is a new task. Below is how that is done.
    const stickyNoteArea = document.querySelector("#stickyNoteArea");
    //Creating the stickyNoteDiv with the aforementioned class. 
    const newStickyNoteDiv = document.createElement("div"); 
    newStickyNoteDiv.setAttribute("class", "stickyNoteDiv");
    newStickyNoteDiv.innerHTML = 
    `
    <i class="bi bi-x-square"></i>
    <img src="/assets/stickyNote.png" class="stickyNoteImg">
    <p class="stickyNoteText"> ${singleNote[0]}</p>
    <span class="stickyNoteDate">${singleNote[1]} ${singleNote[2]}</span>
    `;
    //Appending the newly created sticky note to the end of the the sticky note area
    stickyNoteArea.appendChild(newStickyNoteDiv);

    //Clearing the fields after submit
    document.querySelector("#inputForm").reset();
}

function loadData() {
    const stickyNoteArea = document.querySelector("#stickyNoteArea");
    //Assigning the stored data to storedNotes variable
    let storedNotes = localStorage.getItem("stickyNotes"); 
    //Checking if local storage (storedNotes) is empty. If it is, does not update.
    if (!storedNotes) return;

    //Parsing the stored data, then for every item in the array, updating the stickyNoteContent variable which will be used to update the innerHTML below.
    let stickyNotesArray = JSON.parse(storedNotes);
    let stickyNoteContent = '';
    //For each "sticky note" inside the array, we will display the below string with interpolated values for the text, date and time. Since the position of those values are constant within the array we can use their index to call them.
    for (const note of stickyNotesArray) {
    stickyNoteContent += 
    `
    <div class="stickyNoteDiv">
    <i class="bi bi-x-square"></i>
    <img src="/assets/stickyNote.png" class="stickyNoteImg" alt="Sticky Note">
    <p class="stickyNoteText"> ${note[0]}</p>
    <span class="stickyNoteDate">${note[1]} ${note[2]}</span>
    </div>
    `;
    }

    //Updating the inner HTML of the sticky note area section.
    stickyNoteArea.innerHTML = stickyNoteContent;
}


//# Creating the delete functionality
//removeButtons represents all the buttons with the element i
const removeButtons = document.getElementsByTagName("i");
function deleteNote(event) {

    //# Removing from display
    //Variable we will use to store the DOM reference of the parent of the clicked i element
    let stickyNote = ''; 
    stickyNote = event.target.parentElement; 
    //Setting a fade out animation
    stickyNote.style.animation = "fadeOutAnimation 0.5s forwards";
    //Removing the note after 0.7 seconds
    setTimeout(() => stickyNote.remove(), 700)

    //# Removing from localStorage
    //By creating an array by getting the children of the parent node (the stickNoteArea section), we can virtually duplicate the array in storage in order to get the right array index for the sticky note we want to remove
    let stickyNoteArea = stickyNote.parentElement;
    const index = Array.from(stickyNoteArea.children).indexOf(stickyNote);

    //Loading the array from storage
    let storedNotes = localStorage.getItem("stickyNotes"); 
    let stickyNotesArray = JSON.parse(storedNotes);

    //Splicing the selected item (sticky note) from the array
    stickyNotesArray.splice(index, 1);

    //Saving the deletion
    let stickyNotesJSON = JSON.stringify(stickyNotesArray);
    localStorage.setItem("stickyNotes", stickyNotesJSON);
}

// Add event listener to the container using event delegation
const stickyNoteContainer = document.querySelector("#stickyNoteArea");
stickyNoteContainer.addEventListener("click", function(event) {
    // Check if the clicked element is a "remove" button, then removes the note
    if (event.target.matches("i")) deleteNote(event);
  });

// Function to validate the date input
function validateDateInput() {
    const taskDeadlineDateBox = document.querySelector("#taskDeadlineDateBox");
    const selectedDate = new Date(taskDeadlineDateBox.value).toLocaleDateString();
    const minDate = new Date().toLocaleDateString();
    if (selectedDate < minDate) {
        taskDeadlineDateBox.setCustomValidity("Selected date is earlier than the minimum date.");
    }
}

//Function to validate the hour input
function validateHourInput() {
    const taskDeadlineHourBox = document.querySelector("#taskDeadlineHourBox");
    //Inputted time value. Converting into a number for more accurate comparison
    let selectedHour = parseInt(taskDeadlineHourBox.value, 10)*100;
    let selectedMinutes = parseInt(taskDeadlineHourBox.value.substring(3), 10);
    let selectedTime = selectedHour + selectedMinutes;

    //Creating a new date object of "now" and getting the hour and minutes
    let date = new Date();
    let hour = date.getHours()
    let minutes = date.getMinutes()
    //Converting the "now" time into decimal
    let minHour = (hour*100) + minutes;

    //If the time the user selects is less than the current time, then it shows an error message. Otherwise sets validity to true
    if (selectedTime < minHour) {
        taskDeadlineHourBox.setCustomValidity("Selected time is earlier than the minimum time.");
    } else {
        taskDeadlineHourBox.setCustomValidity('');
    }
}
