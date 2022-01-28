import { DeleteTwoTone } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

export default function Note(props) {
  return (
    <Card>
      <CardHeader title={props.title} />
      <CardContent>{props.content}</CardContent>
      <CardActions>
        <DeleteTwoTone />
      </CardActions>
    </Card>
  )
}