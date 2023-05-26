# Task List manager

This project is my first project at John Bryce. It is meant to be a to-do list stylized in the form of a corkboard, and notebook.

There are three main components to this page:

## Input Page
The input form is stylized to look like a piece of paper from a notebook, using a table to structure the form onto the lines of the notebook. The font MV Boli has been used since it is supported by a wide range of browsers and simulates handwriting to keep with the theme.

Continuing with the styling, the table and inputs have no borders to further simulate "writing" onto the inputs.

## Sticky Notes Area
Each time the user saves a task, it gets placed into the sticky notes area from left to right and fades in. Using flex to display them in a row as well as flex start to insure the "appear" right to left

A sticky note image has been used to provide the effect of writing on a sticky note. Each sticky note is a div, divided into three parts:
First: An image element set to 100% width and height.
Second: A p element for the text, with overflow set to scroll.
Third: A span element for the date.

The sticky note div (read: the whole div containing the above elements) is positioned relative whereas it's children are positioned absolutely to fine tune where we want each element on the "sticky note".

## JS
There are couple components in order to make this work. We have an input form which contains