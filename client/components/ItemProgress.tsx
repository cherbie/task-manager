import React from "react"
import { Box, Slider } from "@material-ui/core"

export default () => {
  
  return (
    <Box minWidth={100}>
      <Slider
        marks={marks}
        max={4}
        min={0}
        defaultValue={0}
      />
    </Box>
  )
}

// Constants

const marks = [{
  value:0,
  label:"0"
}, {
  value:1
}, {
  value: 2,
  label: "50"
}, {
  value: 3
}, {
  value: 4,
  label: "100"
}]