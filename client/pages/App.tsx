import React, { useState, useEffect } from "react"
import { Box, Container, Modal, Button } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"
import SearchBar from "../components/Presentation/SearchBar"
import TodoContainer from "../components/Containers/TodoContainer"
import TaskDetailedViewContainer from "../components/Containers/TaskDetailedViewContainer"
import ActionsContainer from "../components/Containers/ActionsContainer"
import { connect } from "react-redux"
import { IReduxState} from "../Schema/StateSchema"
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
  state: IReduxState;
  openModal: any;
  closeModal?: any;
}

const App = (props: IApp) => {
  const classes = useStyle()
  console.log(`task state:`)
  console.log(props.state)
  console.log(props.openModal)

  return (
    <Box component={Container} minHeight="100%" display="flex" justifyContent="center">
      <Box py={4} display="flex" justifyContent="center">
        <SearchBar />
      </Box>
      <Box py={2} display="flex" justifyContent="center">
        <TodoContainer />
      </Box>
      <Box className={classes.footer} zIndex="tooltip">
        <ActionsContainer />
      </Box>
      <Modal open={props.state.utility.modal.open}>
        <div>
          <TaskDetailedViewContainer />
        </div>
      </Modal>
      <Button onClick={() => props.openModal()}>
        Test Modal
      </Button>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal),
  closeModal: () => dispatch(closeModal)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)