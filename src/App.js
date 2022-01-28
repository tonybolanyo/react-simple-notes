import './App.css';
import NewNoteForm from './components/NewNoteForm';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';
import Note from './components/Note';
import { Box } from '@mui/system';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <NewNoteForm
        onAdd={addNote}
      />
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2, mb: 6 }}>
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          );
        })}
      </Box>
      <Footer />
    </div>
  );
}

export default App;
