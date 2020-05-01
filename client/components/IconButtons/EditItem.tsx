import React from "react" 
import { IconButton } from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit'

export default () => (
  <IconButton edge="end" aria-label="edit">
    <EditIcon htmlColor="yellow" />
  </IconButton>
)