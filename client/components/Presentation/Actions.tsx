import React from "react"
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab"
import { makeStyles } from "@material-ui/core/styles"

interface IActions {
  open: boolean;
  actionIcons: any[];
  tooltips: string[];
  onActionSelect: any[]; // function
  onClose: any; // function
  onOpen: any;
}

export default (props: IActions) => {
  const classes = useStyle()
  
  return (
    <SpeedDial
      className={classes.container}
      ariaLabel="todo-options"
      icon={<SpeedDialIcon />}
      direction="up"
      open={props.open}
      onOpen={props.onOpen}
      onClose={props.onClose}
    >
      {props.actionIcons.map((value, index) => {
        let tooltip = props.tooltips[index]
        return (
          <SpeedDialAction
            icon={value}
            key={index}
            tooltipTitle={tooltip}
            onClick={() => props.onActionSelect[index](tooltip.toLowerCase())}
          />
        )}
      )}
    </SpeedDial>
  )
}

// -- Inline Styling --
const useStyle = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    height: "auto",
    bottom: theme.spacing(4),
    right: theme.spacing(4)
  }
}))