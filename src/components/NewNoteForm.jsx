import { Add } from "@mui/icons-material";
import { Fab, TextField } from "@mui/material";
import { useState } from "react";

export default function NewNoteForm(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <TextField
          id="title"
          label="Title"
          name="title"
          variant="filled"
          value={note.title}
          onChange={handleChange}
        />
        <TextField
          id="content"
          label="Contenido"
          name="content"
          variant="filled"
          multiline
          rows={3}
          value={note.content}
          onChange={handleChange}
        />
        <Fab>
          <Add onClick={submitNote} />
        </Fab>
      </form>
    </div>
  )
}