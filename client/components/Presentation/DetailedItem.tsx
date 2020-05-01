import React from "react"
import { Box, Container, TextField, Button, Paper, Input, FormLabel, Chip, IconButton, Slider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from '@material-ui/icons/Add';
import ItemProgress from "./ItemProgress"

const marks = [{
  value:0,
  label:"0"
}, {
  value:1
}, {
  value: 2,
  label: "50"
}, {
  value: 3
}, {
  value: 4,
  label: "100"
}]

export default () => {

  return (
    <Container>
      <form>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
          <Box m={1} p={2} display="flex" justifyContent="center">
            <Input id="task-title" name="title" placeholder="Title"/>
          </Box>
          <Box width="80%" m={1} p={2} display="flex" justifyContent="center">
            <Input id="task-description" name="description" placeholder="Description" multiline={true} fullWidth={true} />
          </Box>
          <Box m={1} p={2}>
            <Input id="add-tag" placeholder="Add Tag" />
            <IconButton>
              <AddIcon />
            </IconButton>
            <Box>
              <Chip label="Test Tag" onDelete={() => console.log("delete")} />
            </Box>
          </Box>
          <Box m={1} p={2}>
            <ItemProgress />
          </Box>
          <Box m={1} p={2}>
            <Button variant="contained" size="small" type="button">
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  )
}