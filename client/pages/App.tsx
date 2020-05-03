import React, { Suspense, Fragment } from "react"
import { Box, Container, Modal, Button, CircularProgress } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"
import SearchBarContainer from "../components/Containers/SearchBarContainer"
import TodoContainer from "../components/Containers/TodoContainer"
import ActionsContainer from "../components/Containers/ActionsContainer"
import { connect } from "react-redux"
import { IReduxState, ITaskState, IUtilityState } from "../schema/state"
import { openModal, closeModal } from "../redux/actions/modalActions"

// Code Splitting
const TaskDetailedViewContainer = React.lazy(() => import(
  /* webpackChunkName: "modal" */
  "../components/Containers/TaskDetailedViewContainer"
))


interface IApp {
  tasks: ITaskState;
  utility: IUtilityState;
  openModal: any;
  closeModal?: any;
  firebase?: any;
}

const App = (props: IApp) => {
  const classes = useStyle()

  return (
    <Fragment>
      <Box component={Container} minHeight="100%" display="flex" justifyContent="center">
        <Box py={4} display="flex" justifyContent="center">
          <SearchBarContainer />
        </Box>
        <Box py={2} display="flex" justifyContent="center">
          <TodoContainer />
        </Box>
        <Box className={classes.footer} zIndex="tooltip">
          <ActionsContainer firebase={props.firebase} />
        </Box>
        <Modal open={props.utility.modal.open}>
          <Suspense fallback={<CircularProgress color="secondary" />}>
            <>
              <TaskDetailedViewContainer />
            </>
          </Suspense>
        </Modal>
      </Box>
    </Fragment>
  )
}

const useStyle = makeStyles(() => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw"
  }
}))

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  utility: state.utility
})

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal),
  closeModal: () => dispatch(closeModal)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)