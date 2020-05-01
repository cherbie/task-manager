import React from "react"
import { Box, Typography } from "@material-ui/core"

interface ITaskColContainer {
  children: React.ReactNode;
  flexBasis? : number;
  flexGrow? : number;
  textVariant? : "body1"|"overline"
}


export default (props: ITaskColContainer) => (
  <Box m={1} p={1} flexGrow={props.flexGrow ? props.flexGrow : null} flexBasis={props.flexBasis ? props.flexBasis : null}>
    <Typography align="center" color="inherit" noWrap={true} variant={props.textVariant ? props.textVariant : "body1"} display="inline">
      {props.children}
    </Typography>
  </Box>
)