import React, { useState, useEffect } from "react"
import { Box, Chip, Typography, BoxProps, ChipProps } from "@material-ui/core"

interface ITags {
  tags: string[];
  container?: BoxProps
  element?: ChipProps
  [other: string]: any;
}

export default (props: ITags) => {
  const [tagComponents, setTagComponents] = useState(<></>)

  useEffect(() => {
    let componentList = null;
    if(props.tags.length === 0)
      componentList = <Typography>...</Typography>
    else
      componentList = props.tags.map((label, index) => (
        <Box {...props.container} component="span" key={index}>
          <Chip {...props.element} label={label} key={index} variant="outlined" size="small" />
        </Box>
      ))
    
    setTagComponents(componentList)
  }, [props.tags])
  
  return (
    <>
      {tagComponents}
    </>
  )
}