# Github Search

## Steps

1. Setup

   - Create index.html and link main.js and style.css
   - Import Vue from https://cdn.jsdelivr.net/npm/vue/dist/vue.js
   - Create #app div and create Vue Instance

2. HTML

   - Logo
   - Search Input
   - Submit Button
   - Search Results Container

3. Mock Search

   - Create two way binding for search query
   - Create event handler with search method
   - Include script tag for mock/search-results.js
   - Create results data property and set to mock data
   - Render Results using v-for

4. Axios API Call

   - Include axios from CDN
   - Change the search method to do an actual call to the github API

5. Progress Bar

   - Include NProgress.js from CDN
   - Call NProgress.start before axios request
   - Call NProgress.done in finally method of promise

6. Google Search Look
   - Try to mimic the look of Google Search
   - Use the developer tools to inspect the properties Google is using.

## Addons

- Display an error message, if the server doesn't respond
