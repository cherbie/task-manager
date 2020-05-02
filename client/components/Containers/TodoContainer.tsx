import React, { useEffect } from "react"
import { Container, List, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TaskBrief from "../Presentation/TaskBrief"
import { ITaskState, ITask, IReduxState } from '../../Schema/state'
import { connect, useSelector, batch } from "react-redux"
import { openEditModal } from "../../redux/actions/modalActions"
import { updateProgress, completeTask } from "../../redux/actions/taskActions"

interface ITodoContainer {
  onProgressChange: any;
  tasks: ITaskState;
  onEdit: any;
  onComplete: any;
}

const TodoContainer = (props: ITodoContainer) => {
  //const tasks = useSelector(state => state.tasks.list)

  return (
    <Container maxWidth="md">
      <Box width="100%" display="flex" flexDirection="column" justifyContent="center">
        {props.tasks.list.map((value: ITask, index: number) => (
            <TaskBrief task={value} id={index} key={index} onEdit={props.onEdit} onProgressChange={props.onProgressChange} onComplete={props.onComplete} />
          )
        )}
      </Box>
    </Container> 
  )
}

const mapStateToProps = (state: IReduxState) => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  onEdit: (id: number, task: ITask) => dispatch(openEditModal(id, task)),
  onProgressChange: (id: number = -1, value: number) => dispatch(updateProgress(id, value)),
  onComplete: (id: number) => dispatch(completeTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)


