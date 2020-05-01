import React, { useState, useEffect } from "react"
import { Box, Container, Modal, Button } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"
import SearchBar from "../components/Presentation/SearchBar"
import TodoContainer from "../components/Containers/TodoContainer"
import TaskDetailedViewContainer from "../components/Containers/TaskDetailedViewContainer"
import UserActions from "../components/Presentation/UserActions"
import { connect } from "react-redux"
import { IUtilityState, ITaskState } from "../Schema/StateSchema"
import { openModal, closeModal } from "../redux/actions/modalActions"

const useStyle = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw"
  }
}))

interface IApp {
  tasks: ITaskState,
  utility: IUtilityState
  openModal: any;
  closeModal?: any;
}

const App = (props: IApp) => {
  const classes = useStyle()
  console.log(`task state:`)
  console.log(props.tasks)
  console.log(props.utility)

  return (
    <Box component={Container} minHeight="100%" display="flex" justifyContent="center">
      <Box py={4} display="flex" justifyContent="center">
        <SearchBar />
      </Box>
      <Box py={2} display="flex" justifyContent="center">
        <TodoContainer />
      </Box>
      <Box className={classes.footer} zIndex="tooltip">
        <UserActions />
      </Box>
      <Modal open={props.utility.modal.open}>
        <>
          <TaskDetailedViewContainer />
        </>
      </Modal>
      <Button onClick={() => {props.openModal(); setTimeout(props.closeModal, 5000);}}>
        Test Modal
      </Button>
    </Box>
  )
}

const mapStateToProps = (state) => ({ tasks: state.tasks, utility: state.utility })

const mapDispatchToProps = ({openModal, closeModal})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)