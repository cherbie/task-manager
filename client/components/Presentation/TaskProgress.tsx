import React from "react"
import { Box, Slider } from "@material-ui/core"

interface ITaskProgress {
  name?: string;
  onChangeCommitted: any,
  defaultValue?: number
}
export default (props: ITaskProgress) => {
  
  return (
    <Box minWidth={100}>
      <Slider
        marks={marks}
        name={props.name ? props.name : "progress"}
        max={4}
        min={0}
        defaultValue={props.defaultValue ? props.defaultValue : 0}
        onChangeCommitted={props.onChangeCommitted}
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