import './App.css';
import NewNoteForm from './components/NewNoteForm';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';
import Note from './components/Note';
import zIndex from '@mui/material/styles/zIndex';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div className="App">
      <Header />
      <NewNoteForm
        onAdd={addNote}
      />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
