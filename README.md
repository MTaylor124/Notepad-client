## Introduction

Nugpad by Matt Taylor

The goal of this full-stack SPA is to utilize front end design including
JavaScript functionality along with back-end ruby-on rails API.
The goal of Nugpad is to provide a place to create, view, update and delete
notes on one single browser application. Many notepad applications
are operating system dependant and cannot transfer between different media
devices. Having notes stored on an online application provides the versitility
and convenience of being able to access personal notes at any time on any
device that has access to the internet.

Nugpad will also serve as an ongoing experiment that I will use to practice
different UX changes to make more attractive and user-friendly applications.

Back end repository:
(https://github.com/MTaylor124/notepad-api)

## development Process

Nugpad was initially designed with the wireframe shown here
(https://imgur.com/a/PLmbULB)

The User Authentication process were build within HTML5 and desiged ton
connect the form data inputted in the user forms to the back end heroku
supported API to save the user information. (see back end API readme for
more information on the back-end process) After Authentication was completed,
the note system needed to be created. Notes themselves needed to be able
to be created and once they existed, users would need to be able to
view/update/delete them and only for the users themselves. Inputs for each
of those options were then built with the required fields. The option for
create-notes utilized Handlebars to add each entry to below the form fields
and only for the current user.

Once the forms were created an functional, JavaScript logic utilizing
jquery for dom manipulation was implemented so that only appropriate user
options and note options would be visable at any given time.

Nugpad front-end was built with:
  - JavaScript/jquery
  - css
  - HTML5
  - ajax
  - Handlebars

## Problem Solving Strategy

Many problems arose during User Authentication and note access.
UX issues with dom manipulation were fixed while double-checking element
attributes. I also discovered that if you .hide() a form and then try to
.show() elements within that form they will not show. You will need to .hide()
and .show() individual elements at a time.
Several other issues arose where data was not being sent/received as expected
and the process I took to fix them involved constantly checking the console
in the browser to read the data to ensure it's in the format expected.
ex note.user.id vs note.user_id

## Planned additions for the future

-Delete note function changing to an individual 'x' each note has in top right
  corner
-form data for note body having soft wrapping text
-notes have alternating background colors (light gray/dark gray)
-be able to have changeable fonts for the page
-scalable for different media sizes/usable on phone

## Wireframes and User Stories

-as a user I want to be able to sign up/sign in/sign out of my account
-as a user I want to be able to change my password
-as a user I want to be able to create my own Notes
-as a user I want other people to not be able to see my notes
-as a user I want to be able to view my created notes
-as a user I want to be able to update/delete my notes

Wireframe for front-end
https://imgur.com/a/PLmbULB
