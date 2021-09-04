export default class api-app{
    static getAllNotes(){
        cont notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes.sort((a,b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
        

    }

    static saveNote(noteToSave){
        cont notes = api-app.getAllNotes()
        const existing = notes.find(note => note.id == noteToSave.id);

        if (existing){
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();


        }else{
            noteToSave.id = Math.floor(Math.random()*1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
            
        }

        noteToSave.id = Math.floor(Math.random() * 1000000);

        notes.push(noteToSave);






        localStorage.setItem("notesapp-notes", JSON.stringify(notes));

    

    }
    

    static deleteNote(id){

    }

}