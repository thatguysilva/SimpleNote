document.getElementById('addNote').addEventListener('click', function() {
    let noteInput = document.getElementById('noteInput');
    
    if(noteInput.value.trim() !== "") {
        let note = {
            text: noteInput.value,
            timestamp: new Date().toLocaleString()
        };
        saveNote(note);
        displayNote(note);
        noteInput.value = "";
    } else {
        alert("Note cannot be empty!");
    }
});

function saveNote(note) {
    let notes = getNotesFromStorage();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getNotesFromStorage() {
    let notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

function displayNote(note) {
    let notesList = document.getElementById('notesList');
    let li = document.createElement('li');
    li.textContent = `${note.text} (Created on: ${note.timestamp})`;
    
    // Add delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        deleteNote(note, li);
    });
    li.appendChild(deleteBtn);
    
    notesList.appendChild(li);
}

function deleteNote(note, li) {
    let notes = getNotesFromStorage();
    let index = notes.findIndex(n => n.text === note.text && n.timestamp === note.timestamp);
    if (index !== -1) {
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        li.remove(); // Remove the li element from the DOM
    }
}

function loadNotes() {
    let notes = getNotesFromStorage();
    for(let note of notes) {
        displayNote(note);
    }
}

// Load notes from storage on page load
loadNotes();
