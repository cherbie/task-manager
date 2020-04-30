import React from "react"
import { Box, Container, TextField, Button, Paper, Input, FormLabel, Chip, IconButton, Slider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from '@material-ui/icons/Add';

const useStyle = makeStyles((theme) => ({
  modalBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    width: "100vw"
  },
  texture: {
    background: 'url("/static/img/white-wall-texture.jpg")'
  }
}))

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
  const classes = useStyle()

  return (
    <Container className={classes.modalBody} maxWidth="sm">
      <Paper className={classes.texture} variant="outlined" elevation={5}>
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
              <Box m={1} p={2} minWidth={100}>
                <Slider
                  marks={marks}
                  max={4}
                  min={0}
                  defaultValue={0}
                />
              </Box>
              <Box m={1} p={2}>
                <Button variant="contained" size="small" type="button">
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        </Container>
      </Paper>
    </Container>
  )
}