import React from "react"
import { Paper, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TaskDetailedView from "../Presentation/TaskDetailedView"


interface TaskDetailedViewContainer {
  [props: string]: any;
}

export default (props) => {
  const classes = useStyle()

  return (
    <Container className={classes.container} maxWidth="sm">
      <Paper className={classes.texture} variant="outlined" elevation={5}>
        <TaskDetailedView />
      </Paper>
    </Container>
  )
}

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    width: "100vw"
  },
  texture: {
    background: '#cce7e8',
    opacity: 0.9
  }
}))