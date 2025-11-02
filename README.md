🎙️ Podcast App — DJS02: Web Components Project
📘 Overview

This project is a continuation of DJS01: Vanilla JS Podcast App, now upgraded to use Web Components for cleaner, modular, and reusable JavaScript architecture.
The app dynamically displays a list of podcast shows in a responsive grid and allows users to view detailed information inside a modal without navigating away from the page.

This version focuses on:

- Applying component-based architecture with reusable <podcast-preview> elements.

- Demonstrating encapsulation using the Shadow DOM.

- Following JavaScript design principles such as SRP (Single Responsibility Principle).

🧩 Key Features

🧱 Reusable Web Component: Each podcast preview is represented by a custom <podcast-preview> element.

🎨 Encapsulated Styling: Shadow DOM keeps styles and structure self-contained inside each component.

⚡ Dynamic Rendering: Podcast data loads automatically from data.js and is rendered into the grid via JavaScript.

💬 Interactive Modal: Clicking a podcast card opens a modal showing full details (title, description, genres, etc.).

🧠 Modular Codebase: Each file handles one responsibility, following clean code practices.

📁 Project Structure
📦 PodcastApp/
│
├── index.html # Main HTML structure
├── styles.css # Styling for layout and global design
│
├── 📁 src/
│ ├── index.js # Initializes app and renders podcast grid
│ ├── data.js # Contains podcast and genre datasets
│
│ ├── 📁 components/
│ │ ├── PodcastPreview.js # Defines reusable <podcast-preview> Web Component
│ │ ├── createModal.js # Handles modal open/close and content
│ │
│ ├── 📁 views/
│ ├── createGrid.js # Renders all podcast previews dynamically
│
└── README.md # Project documentation

⚙️ How It Works
1️⃣ Data Loading

- data.js exports two datasets:

- podcasts: Each podcast includes details like title, image, genres, seasons, and last updated date.

- genres: Maps genre IDs to readable names (e.g., 1 → Personal Growth).

2️⃣ Rendering the Grid

- The grid is rendered by createGrid.js.

- For each podcast, a <podcast-preview> element is created and its attributes (title, cover, genres, etc.) are set dynamically.

- The element is then appended to the grid container in index.html.

3️⃣ Web Component Structure

Defined in PodcastPreview.js, this component:

- Uses Shadow DOM to encapsulate HTML and CSS.

- Displays the podcast cover, title, genres, seasons, and updated date.

- Dispatches a custom event (podcastSelected) when clicked.

4️⃣ Modal Interaction

- createModal.js listens for podcastSelected events.

- When triggered, it opens a modal containing detailed podcast information.

- The modal can be closed by clicking the “×” close button.

💡 Example of a Web Component

Here’s how a single podcast preview is represented in HTML once rendered:

<podcast-preview
cover="https://content.production.cdn.art19.com/images/example.png"
title="American History Tellers"
genres="History"
seasons="51"
updated="2022-11-02T07:01:00.000Z"

> </podcast-preview>

🧭 How to Interact with the App

. Launch the app in your browser (see Run Instructions below).

. Browse the grid of podcast previews.

. Hover over a card to see the hover animation (slight scale effect).

. Click a podcast card → a modal window opens showing detailed information.

. Click the close (×) button to exit the modal and return to the grid view.

🚀 Run Instructions

- Clone or download this project to your computer.

- Open the project folder in Visual Studio Code.

- Right-click on index.html → select “Open with Live Server”.

- Your browser will open automatically at http://127.0.0.1:5500/.

- You should now see the Podcast App running locally.

🧠 JavaScript Principles Demonstrated
Principle Description
SRP (Single Responsibility Principle) Each module handles a single, clear purpose (e.g. rendering, modal logic, or component structure).
Encapsulation Web Components use Shadow DOM to isolate HTML and CSS.
Reusability <podcast-preview> can be reused across different layouts or pages without code duplication.
Separation of Concerns HTML for structure, CSS for style, and JavaScript for interactivity are kept modular.
🧑‍💻 Developer Notes

- All interactivity is handled on the client side (no backend required).

- Built with Vanilla JavaScript and ES Modules (no frameworks).

- Designed to be responsive and visually clean using flexbox/grid layout.

- The project demonstrates practical use of Web Components for real-world UI patterns.
