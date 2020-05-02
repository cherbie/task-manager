import React from "react"
import UserActions from "../Presentation/Actions"
import { connect } from "react-redux"
import { IReduxState } from "../../Schema/state"
import { openActions, closeActions, actionSelect } from "../../redux/actions/userActions"

interface IActionsContainer {
  open: any;
  onActionSelect: any;
  onOpen: any;
  onClose: any;
}

const ActionsContainer = (props: IActionsContainer) => {

  return (
    <div>
      <UserActions open={props.open} onActionSelect={props.onActionSelect} onOpen={props.onOpen} onClose={props.onClose}/>
    </div>
  )
}

const mapStateToProps = (state: IReduxState) => ({
  open: state.utility.actions.open
})

const mapDispatchToProps = (dispatch) => ({
  onActionSelect: (type: "add"|"save"|"edit") => dispatch(actionSelect(type)),
  onOpen: () => dispatch(openActions), // open the SpeedDial
  onClose: () => dispatch(closeActions) // close the speedDial
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionsContainer)