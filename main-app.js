import API from "api-app.js"

api-applicationCache.saveNote({
    titel: "New Note!",
    body: "new note wow"
});

console.log(api-applicationCache.getAllNotes());