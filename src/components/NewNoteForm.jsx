import { Add } from "@mui/icons-material";
import { Card, CardActions, CardContent, Fab, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function NewNoteForm(props) {

  const [isExpanded, setExpanded] = useState(false);

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

  function expand() {
    setExpanded(true);
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={2}>
      <Card sx={{ maxWidth: 480, width: '100%' }}>
        <CardContent>

          <form className="create-note">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
              mt={2}
            >
              {isExpanded &&
                <TextField
                  id="title"
                  label="Título"
                  name="title"
                  variant="filled"
                  value={note.title}
                  onChange={handleChange}
                />
              }
              <TextField
                id="content"
                label="Contenido"
                name="content"
                variant="filled"
                multiline
                rows={isExpanded ? 3 : 1}
                value={note.content}
                onChange={handleChange}
                onClick={expand}
              />
            </Box>
          </form>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Fab size="small">
            <Add onClick={submitNote} />
          </Fab>
        </CardActions>
      </Card >
    </Box>
  )
}