import React from "react" 
import { IconButton } from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit'

interface IEditBtn {
  onClick: any;
  id: number;
  [other: string]: any;
}

export default (props: IEditBtn) => (
  <IconButton {...props.other} onClick={props.onClick} edge="end" aria-label="edit">
    <EditIcon htmlColor="yellow" />
  </IconButton>
)