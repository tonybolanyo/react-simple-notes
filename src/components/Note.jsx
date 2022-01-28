import { DeleteTwoTone } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";

export default function Note(props) {

  function handleClick() {
    console.log('Borrar nota')
    props.onDelete(props.id);
  }

  return (
    <Card sx={{width: 250}}>
      <CardHeader title={props.title} />
      <CardContent>{props.content}</CardContent>
      <CardActions>
        <Button onClick={handleClick}>
          <DeleteTwoTone />
        </Button>
      </CardActions>
    </Card>
  )
}