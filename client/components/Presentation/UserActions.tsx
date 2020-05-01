import React from "react"
import { SpeedDial, SpeedDialAction } from "@material-ui/lab"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SaveIcon from "@material-ui/icons/Save"
import { makeStyles } from "@material-ui/core/styles"

export default () => {
  const classes = useStyle()
  
  return (
    <SpeedDial
      className={classes.container}
      ariaLabel="todo-options"
      icon={<SpeedDialIcon />}
      direction="up"
      open={false}
    >
      {actions.map((value, index) => (
        <SpeedDialAction
          icon={value.icon}
          key={index}
          tooltipTitle={value.name}
        />
      ))
      }
    </SpeedDial>
  )
}

const actions = [{icon: <AddCircleIcon />, name: "Add"},{ icon: <SaveIcon />, name: 'Save' }]

const useStyle = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    height: "auto",
    bottom: theme.spacing(4),
    right: theme.spacing(4)
  }
}))