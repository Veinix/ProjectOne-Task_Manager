# Changelog

All notable changes to this project will be documented in this file

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## Unreleased
- Notes will to move into place after deleting a note ahead of it
- Auto high-light of input box on page load or note creation
- Clean up JS syntax
- Update `README.md` to reflect changes and behavior 

## [1.1.0](https://github.com/Veinix/TaskManager_ProjectOne/commit/f71a213f50059ad4007063c49cc75a1ba4c2d8f6) - 2023-06-04

### Updated
- Updated the date validation
- Updated time validation
- Updated how the sticky note is created and loaded
- Cleaned up JS comments and structure

### Added
- Created styles folder and moved stylesheets into it

### Fixed
- Fixed the CSS such that the last `stickyNoteDiv` fades in, and if there is only one - then it doesn't

### Changed
- Edited JS Validation handler
- Changed favicon icon from Assaf to Book emoji

## [1.0.10](https://github.com/Veinix/TaskManager_ProjectOne/commit/46346efa85fac385721ee93db184d5977414d9bc) - 2023-05-29

### Updated
- Time now shows in DD/MM/YYYY format

## [1.0.9](https://github.com/Veinix/TaskManager_ProjectOne/commit/eae5fa270304f3529874330e49331c9128b01ec3) - 2023-05-29

### Added
- `CHANGELOG.md`
    - Retroactively added all updates into `CHANGELOG.md`

### Updated 
- Fix validation for date and time to prevent a task to be set in the past
- Adding a task now clears the fields

## [1.0.8](https://github.com/Veinix/TaskManager_ProjectOne/commit/4a5a810f7728d590c2807c392f13ebf46ee3b3da) - 2023-05-26

### Updated

- `README.md`
    - Updated with information on how to use, and reasonings for use of different methods, styles, elements etc.
    
    
## [1.0.7](https://github.com/Veinix/TaskManager_ProjectOne/commit/45579279ec0f0067c518f9725cf6c9ca9d9e3643) - 2023-05-26


### Added
- Added MIT License `LICENSE.md`

## [1.0.6](https://github.com/Veinix/TaskManager_ProjectOne/commit/2309b3e74fbb04003959ccede861618e33355c02) - 2023-05-26

### Added
- `main.js`
    - Delete functionality for notes such that each note fades out
- `style.css`
    - `fadeOut` class for `fadeOutAnimation`  animation 
- `transitions.css`
    - `fadeOutAnimation` created
    
### Updated
- `index.html` 
    - Updated save button text
    - Updated reset button text


## [1.0.5](https://github.com/Veinix/TaskManager_ProjectOne/commit/f7773124072a3e2bc9d7f4ec731308a009961076) - 2023-05-26

### Added
- `main.js`
    - Added bootstrap icon "X" to sticky note

### Update
- `main.js`
    - Changed functionality of fade-in such that each new note fades in and not all at once
    
### Removed


## [1.0.4](https://github.com/Veinix/TaskManager_ProjectOne/commit/9aeee0b639823d05ba5e9e22c995b5c9e4020fc7) - 2023-05-26

### Added
- Assets
    - Added a "My Task Board" `img`
    
- `index.html`
    - Added link to Bootstrap Icons
    
- `style.css`
    - Made Bootstrap icon visible on hover of `.stickyNoteDiv`
    
### Changed
- `index.html`
    - Changed title from `h1` to "My Task Board" `img`
    



### Updated
- Assets
    - Corkboard background
    - Notebook background
    - Sticky note
- `index.html` 
    - Changed `input type` of `#taskDetailsBox` to `textarea`
- `style.css`
    - Updated `table` styling to better align with the notebook lines
    - Added in `fadeInAnimation` to sticky notes
    - Updated positioning of note information elements on sticky note
    
### Removed



## [1.0.3](https://github.com/Veinix/TaskManager_ProjectOne/commit/a1c39b233af18fe3f745cc02962ae8b47698f0b5) - 2023-05-26

### Added

- `index.html`
    - New Clear button to reset storage
- `main.js`
    - Added reset functionality to the reset button
    - Added validation handler for the input form
    - Create `addData()` function that adds a sticky note (with information in it) to an array, which is then turned into a JSON then stored in `localStorage` for later manipulation
    - Create `loadData()` function that gets the sticky notes from `localStorage` and displays them in the `#stickyNoteArea`
    
### Changed

- `index.html`
    - Updated ID for `form`
    - Edited text inside `#saveButton` to "Add" from "Save" 
    
- `main.js`


- `style.css`
 - Commented out animation `fadeInAnimation` from `.stickyNoteDiv`

### Removed

- `index.html`
    - Removed "demo" of sticky note


## [1.0.2](https://github.com/Veinix/TaskManager_ProjectOne/commit/5ed9036e34760f5887f19de2e9e1c655cba98136) - 2023-05-26

### Added

- Assets
    - New favicon
    - New sticky note image for sticky notes
    
- `transitions.css` file
    - Added `fadeInAnimation` `@keyframes`

### Changed

- `index.html`

    - Link to `transitions.css`
    - Link to `favicon.ico`
    - Changed name of `#stickyNotes` to `#stickyNotesArea` to better reflect purpose
    - Added "demo" of sticky note
    
- `main.js`

    - Added and updated const for element selector for the inputs and buttons
    
- `style.css`

    - Added styling for sticky notes such that the notes are all aligned in a row, and the sticky notes each have their details positioned correctly on them visually

- Name of project from `toDoList-Project1` to `Task List Manager`
- `README.md`
    - Added information about the components of the project

## [1.0.1](https://github.com/Veinix/TaskManager_ProjectOne/commit/15ee8b599b0ce8eb0b4671b6b6018bf5c816b427) - 2023-05-26

### Added

- Added assets
    - Corkboard image for main background
    - Notebook page image for form background

### Changed

- `index.html`
    - Bootstrap CDN link
    - Link to `style.css`
    - Link to `main.js`
    - Labels and input IDs to better reflect their respective elements.
    - Placed form inside table to be able to structure it better
    - Added a section `#stickyNotes` to later place dynamically created sticky notes inside

- `style.css`
    - Set default padding and margin to 0
    - Set font-family to "MV Boli" to simulate handwriting
    - Center aligned `main` element, set height using rem units, set background to notebook page
    - Set background of `body` to corkboard background
    - Set `form` font size and height
    - Set `table` sizing and text-alignment
    - Set `button` background transparent, with no border and on-hover effects
    
- `main.js`
    - Added const for element selector of `#stickyNotes`

## [1.0.0](https://github.com/Veinix/TaskManager_ProjectOne/commit/b27c490d63bd8ccd76101f900336b6c94df7c08b) - 2023-05-26

### Added

- New `index.html` file
    - Added title
    - Created basic form for task detail input, including buttons
- New `style.css` file
- New `main.js` file
- New `README.md` file