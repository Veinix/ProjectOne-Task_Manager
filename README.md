# Task List manager

This project is my first project at John Bryce. It is a simple web application for managing your to-do list. You can add tasks with details and deadlines, and they will be displayed as "sticky notes" on the screen. The application uses HTML, CSS, and JavaScript.

First, I will broadly describe the different features of this project, then delve into the HTML, CSS, and JavaScript.

## Features

- Add tasks with details and deadlines
- Display tasks as "sticky notes" on the screen
- Remove tasks by clicking on the "X" button on each sticky note
- Data is stored in the browser's local storage, so tasks persist even after refreshing the page

## How to Use

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Fill in the task details and deadline in the form.
4. Click the "Add Task" button to add the task.
5. The task will be displayed as a sticky note on the screen.
6. To remove a task, click the "X" button on the corresponding sticky note.
7. Tasks are saved in the browser's local storage, so they will persist even after refreshing the page.



### Input Form
The input form is stylized to look like a piece of paper from a notebook, using a table to structure the form onto the lines of the notebook (Part of the requirements). The font MV Boli has been used since it is supported by a wide range of browsers and simulates handwriting to keep with the theme.

Continuing with the styling, the table and inputs have no borders to further simulate "writing" onto the inputs. I decided to keep the :active blue border for the inputs to help users to know they have clicked on the respective input.

### Sticky Notes Area
Each time the user adds a task, it is placed in the sticky notes area from left to right and fades in. Flexbox is utilized to display the sticky notes in a row (flex-direction: row), and align-items: flex-start ensures that they appear from left to right. Moreover, the task data is stored in an array and saved in the localStorage, enabling the project's functionality.

To create the effect of writing on a sticky note, a sticky note image is used, as required. Each sticky note is represented by a container div (referred to as stickyNoteDiv), which is further divided into four parts:

    An image element: Contains the image of the sticky note.
    A paragraph element (<p>): Displays the task or text inputted by the user.
    A span element: Shows the date and time, extracted from the inputs.
    An icon element (<i>): Represents a Bootstrap icon of an X, allowing the user to delete the task. This is achieved by utilizing Bootstrap's icon classes and content delivery networks (CDNs).

The stickyNoteDiv is positioned relatively to maintain its space in the document flow, ensuring that additional sticky notes do not overlap. On the other hand, the children elements (image, paragraph, span, and icon) are positioned absolutely, removing them from the document flow and allowing precise placement on the sticky note.

Upon page reload, the localStorage array containing the sticky notes is loaded and displayed in the Sticky Notes area, providing a continuous experience for the user.

## HTML
### Input Form
In designing the input form, the goal was to align each line of the form with a corresponding line on the page. To achieve this, a table structure was employed to align each row. More specific details regarding the CSS styling will be discussed in the following section.

## CSS Styling
The `style.css` file contains CSS rules that enhance the visual appearance and UX of the web application. Here are the key aspects of the CSS styling used in this project:

### Selectors

Selectors target specific HTML elements to apply styles. This project makes use of various selectors:

-  Element selectors (eg. table, tr) target specific HTML elements for styling.

-  Class selectors (eg. .stickyNoteDiv, .stickyNoteImg) target elements with specific class attributes.

-  ID selectors (eg. #inputForm, #stickyNoteArea) select elements with specific ID attributes.

-  Pseudo-class selectors (:hover) apply styles when an element is being hovered over.

### Styling

- The background property sets background images and colors for elements. For example, the `body` selector sets a corkboard background image, enhancing the visual appeal of the entire application.

- The `font-family` property specifies the font used throughout the application. In this case, the `"MV Boli"` font, resembling handwriting, is chosen to achieve a notebook-like appearance.

- Various properties like `width`, `height`, `margin`, `padding`, and `position` control the dimensions, spacing, and positioning of elements on the page.

### Flexbox

The `#stickyNoteArea` section uses the flexbox layout model to create a flexible and responsive arrangement of sticky notes. The following properties are utilized:

- display: flex enables the flexbox layout for the container.

- flex-flow: row wrap specifies that the flex items should flow as rows and wrap to the next row if the container's width is exceeded.

- justify-content: flex-start positions the flex items at the start of the container, aligning them from left to right.

### Positioning

Different positioning techniques control the placement of elements:

- `relative` positioning positions elements relative to their normal position in the document flow. For example, the `.stickyNoteDiv` class uses position: relative to enable positioning of sticky notes within the container.

- `absolute` positioning positions elements relative to their nearest positioned ancestor. The `top`, `right`, `bottom`, and `left` properties determine the element's position.



### Transitions and Animations

Transitions are applied to elements to create smooth animations. The `transitions.css` file contains `@keyframes` and `animation` definitions that are used to apply fade-in and fade-out animations to the sticky notes. To handle animations separately, this project includes a dedicated CSS file, `animations.css`. Here are the reasons for using a separate file:

1. Modularity and Separation of Concerns: The separate CSS file ensures organized and modular code. Animations can be developed and maintained independently of other styles, improving code structure. This is the same logic as to why you would separate a `calculate` function from a `display calculation` function.

2. Reusability and Scalability: With a dedicated file, animation styles can be reused across elements or components, promoting code reusability. As the project scales, adding and managing new animations becomes more manageable.

3. Performance Optimization: Separating animations into a distinct file allows browsers to load and cache animation styles separately. This optimization improves performance by prioritizing rendering of core styles and animations independently, resulting in a smoother user experience.

4. Collaboration and Workflow: A separate file enables efficient collaboration as developers can work on animations without interfering with main styles. It streamlines teamwork and facilitates concurrent animation-related tasks.

Although these principles may appear irrelevant in a small project, in my opinion it is good practice to code with them in mind to enhance the code quality for future projects.

## JavaScript
The JavaScript code provided contains various functions and event handlers to handle the functionality of the web application. Let's examine the different functions, methods, syntax, and overall readability, including comments.

### Functions

1. `addData()`

This function handles the process of adding new sticky notes to the application. It retrieves the input values from the HTML elements, stores them in the `stickyNotesArray`, converts the array to `JSON`, and saves it to the local storage. Additionally, it dynamically creates a new div element representing a sticky note with appropriate HTML content and appends it to the `stickyNoteArea` section. The function demonstrates the use of `querySelector`, `createElement`, and `appendChild` methods for manipulating the DOM.

2. `loadData()`

The `loadData()` function is responsible for loading and displaying the stored sticky notes from the local storage, specifically on refresh or load. It retrieves the stored notes, parses the `JSON` data, and dynamically generates the HTML content for each note using a `for...of` loop. The function then updates the `stickyNoteArea` section's `innerHTML` with the generated content. The function efficiently utilizes string concatenation (+=) to build the HTML content.

### Validation and Event Listeners

The code includes an event listener for the form submission `(submit)` event. It prevents the default form submission behavior, checks the form validity using the `checkValidity()` method, and either calls the `addData()` function or displays form validation errors using the `reportValidity()` method.

### Delete Functionality

The `deleteNote(evt)` function handles the deletion of sticky notes. It removes the note from the display by applying a fade-out animation and removes it from the local storage by finding its index in the `stickyNotesArray` and using `splice()` to remove it. The function effectively uses event delegation by attaching the event listener to the `stickyNoteContainer` and checking if the clicked element matches the remove button `i` represented by a Bootstrap Icon of an X enclosed by a square .

## Thank you for reading!
Feel free to explore the code and make modifications according to your preferences or requirements. Enjoy using the to-do list web-app! 

## Dependencies

This project uses the following dependencies:

- [Bootstrap](https://getbootstrap.com/) v5.3.0-alpha3
- [Bootstrap Icons](https://icons.getbootstrap.com/) v1.10.5

The CSS and JavaScript files for these dependencies are included via CDN links.

## License

This project is licensed under the [MIT License](LICENSE.md).