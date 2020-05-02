import React from "react" 
import { IconButton } from "@material-ui/core"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'

interface IMarkDoneBtn {
  onClick: any;
  id: number;
  [other: string]: any;
}

export default (props: IMarkDoneBtn) => (
  <IconButton {...props.other} onClick={props.onClick} >
    <DoneOutlineIcon htmlColor="green" />
  </IconButton>
)