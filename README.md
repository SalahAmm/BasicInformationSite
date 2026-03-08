# Basic Information Site

A simple, basic informational website built using vanilla Node.js. It runs a custom HTTP server that serves different HTML pages based on the client request route.

## Pages Included
- `index.html` (Home page - accessed via `/` or `/index.html`)
- `about.html` (About page - accessed via `/about.html`)
- `contact-me.html` (Contact page - accessed via `/contact-me.html`)
- `404.html` (Error page - served on any unmatched routes)

## Prerequisites
- Node.js installed on your machine.

## How to Run the Project
1. Open your terminal and navigate to the root directory of this project.
2. Run the following command to start the server:
   ```bash
   node index.js
   ```
3. Open your web browser and navigate to:
   - [http://localhost:8080](http://localhost:8080)

## Project Structure
- `index.js` - The main Node.js server logic
- `index.html` - The home route template
- `about.html` - The about route template
- `contact-me.html` - The contact route template
- `404.html` - The fallback page for unfound routes
