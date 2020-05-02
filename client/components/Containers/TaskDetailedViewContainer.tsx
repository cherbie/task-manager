import React from "react"
import { Paper, Container, Badge } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TaskDetailedView from "../Presentation/TaskDetailedView"
import { connect } from "react-redux"
import { ITask, IReduxState } from "../../Schema/state"
import { closeModal } from "../../redux/actions/modalActions"
import { addTask } from "../../redux/actions/taskActions"


interface ITaskDetailedViewContainer {
  onExit: any;
  onSubmit: any;
  utility: any; // state.utility
  tasks: any; // state.tasks
}

const TaskDetailedViewContainer = (props: ITaskDetailedViewContainer) => {
  const classes = useStyle()

  return (
    <Container className={classes.container} maxWidth="sm">
      <Paper className={classes.texture} variant="outlined" elevation={5}>
        <TaskDetailedView id={props.utility.modal.index} task={props.utility.modal.task} onSubmit={props.onSubmit} onExit={props.onExit} />
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

const mapStateToProps = (state: IReduxState) => ({
  utility: state.utility,
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  onExit: () => dispatch(closeModal),
  onSubmit: (id: number = -1, task: ITask) => {
    dispatch(addTask(id, task))
    dispatch(closeModal)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailedViewContainer)