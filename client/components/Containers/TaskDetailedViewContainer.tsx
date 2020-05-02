import React from "react"
import { Paper, Container, Badge } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TaskDetailedView from "../Presentation/TaskDetailedView"
import { connect } from "react-redux"
import { ITask } from "../../Schema/state"
import { closeModal } from "../../redux/actions/modalActions"
import { addNewTask } from "../../redux/actions/taskActions"


interface ITaskDetailedViewContainer {
  onExit: any;
  onSubmit: any;
  //values: ITask;
  [props: string]: any;
}

const TaskDetailedViewContainer = (props: ITaskDetailedViewContainer) => {
  const classes = useStyle()

  return (
    <Container className={classes.container} maxWidth="sm">
      <Paper className={classes.texture} variant="outlined" elevation={5}>
        <TaskDetailedView onSubmit={props.onSubmit} onExit={props.onExit} />
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
    opacity: 0.9
  }
}))

const mapDispatchToProps = (dispatch) => ({
  onExit: () => dispatch(closeModal),
  onSubmit: (task: ITask) => dispatch(addNewTask(task))
})

export default connect(null, mapDispatchToProps)(TaskDetailedViewContainer)