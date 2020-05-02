import React, { useEffect } from "react"
import { Container, List, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TaskBrief from "../Presentation/TaskBrief"
import { ITaskState, ITask, IReduxState } from '../../Schema/state'
import { connect, useSelector } from "react-redux"

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
            <TaskBrief value={value} id={index} key={index} onEdit={() => console.log("edit selected")} onProgressChange={() => console.log("progress change")} onComplete={() => console.log("set complete")} />
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

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)


