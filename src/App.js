import './App.css';
import NewNoteForm from './components/NewNoteForm';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';

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
      <Footer />
    </div>
  );
}

export default App;
