import React, { useEffect } from "react"
import UserActions from "../Presentation/Actions"
import { connect } from "react-redux"
import { IReduxState } from "../../Schema/state"
import { openActions, closeActions, actionSelect } from "../../redux/actions/userActions"
import AddCircleIcon from "@material-ui/icons/AddCircleOutline"
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useFirebaseAuth from "../../hooks/useFirebaseAuth"

interface IActionsContainer {
  open: any;
  actionsOnAdd: any;
  onOpen: any;
  onClose: any;
  firebase: any; // firebase app
}

const ActionsContainer = (props: IActionsContainer) => {
  const { isLoggedIn, user, firebaseLogin, firebaseLogout } = useFirebaseAuth(props.firebase)
  
  return (
    <div>
      <UserActions actionIcons={[<AddCircleIcon />, isLoggedIn ? <ExitToAppIcon /> : <LockOpenIcon />]} tooltips={["Add", isLoggedIn ? "Logout" : "Login"]} open={props.open} onActionSelect={[props.actionsOnAdd, isLoggedIn ? firebaseLogout : firebaseLogin]} onOpen={props.onOpen} onClose={props.onClose}/>
    </div>
  )
}

const mapStateToProps = (state: IReduxState) => ({
  open: state.utility.actions.open
})

const mapDispatchToProps = (dispatch) => ({
  actionsOnAdd: () => dispatch(actionSelect("add")),
  onOpen: () => dispatch(openActions), // open the SpeedDial
  onClose: () => dispatch(closeActions) // close the speedDial
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionsContainer)