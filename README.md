# Admin-Dashboard

## About the project

This project was made as part of **The Odin Project** <a href="https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-admin-dashboard">curriculum</a>.

This project started as an **Admin Dashboard**, but later I decided to slightly modify it to be a personal **Portfolio** of the projects I made.

## How It's Made

Tech used: **HTML**, **CSS**, **JavaScript**

The project was made to practice **Grid Layout** and to understand the differences between **Grid** and **Flexbox**, so I made some components using Flex and other using Grid.

- I used **Grid** for: page layout, main and "My Projects" sections;

- I used **Flex** for: sidebar navigation, buttons layout, announcements and trending sections and other places where I needed something organized on one dimension and not 2 dimensions.

The main challenge was what should I do when the user enters on the page from a mobile device or resizes the browser window. The solution was to use Media Queries and JavaScript.

1. **Sidebar Navigation**: if the width is <=900px it shows only the icons;
2. **Buttons**: if the width is <=700px the buttons will be combined in a dropdown menu;
3. **Project Description**: if the text in the box overflows, it is automatically truncated and encouraging users to visit the GitHub repo for more details;
4. **"Announcements"** and **"Trending"**: if the page is <=500px that sections will be moved under "My Projects".

## Images

-   profile pictures used on the trending page - https://www.freepik.com/search?format=search&last_filter=query&last_value=Animated+cartoon&query=Animated+cartoon , https://www.freepik.com/search?format=search&last_filter=query&last_value=Animated+cartoon&query=Animated+cartoon

-   cat photo: https://pixabay.com/illustrations/cat-pets-animal-doll-cat-kitten-7287671/

-   icons - https://pictogrammers.com/library/mdi/
