import React, { useState, useEffect } from "react"
import { Box, Chip, Typography } from "@material-ui/core"

interface ITags {
  tags: string[];
  container?: any;
  elementColor?: "primary"|"secondary";
  onDelete?: any;
  [other: string]: any;
}

export default (props: ITags) => {
  const [tagComponents, setTagComponents] = useState(<></>)

  useEffect(() => {
    let componentList = null;
    if(props.tags.length === 0) {
      componentList = <Typography>...</Typography> // display placeholder
    } else {
      componentList = props.tags.map((label, index) => (
        <Box {...props.container} component="span" key={index}>
          <Chip onDelete={props.onDelete ? () => props.onDelete(index) : null} color={props.elementColor} label={label} key={index} variant="outlined" size="small" />
        </Box>
      ))
    }
    setTagComponents(componentList) // set tag component list
  }, [props.tags])
  
  return (
    <React.Fragment>
      {tagComponents}
    </React.Fragment>
  )
}