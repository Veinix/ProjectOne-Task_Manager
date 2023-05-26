// Using querySelector method to get the elements for the input fields and their values, the section we will put all the "sticky notes" in and the reset/save buttons.
const stickyNotesArea = document.querySelector("#stickyNoteArea");
const taskDetailsBox = document.querySelector("#taskDetailsBox");
const taskDeadlineDateBox = document.querySelector("#taskDeadlineDateBox");
const taskDeadlineHourBox = document.querySelector("#taskDeadlineHourBox");
const saveButton = document.querySelector("#saveButton");
const resetButton = document.querySelector("#resetButton");

// Values of those boxes
//# Line below works (On click, logs to the console the value of taskDetailsBox)
//# saveButton.addEventListener("click", () => console.log(taskDetailsBox.value));