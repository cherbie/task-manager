import React, { useState, useEffect } from "react"
import { Box, Slider } from "@material-ui/core"

interface ITaskProgress {
  name?: string;
  onChangeCommitted: any,
  value?: number
}

export default (props: ITaskProgress) => {
  const [value, setValue] = useState(props.value ? props.value : 0)

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  return (
    <Box minWidth={100}>
      <Slider
        marks={marks}
        name={props.name ? props.name : "progress"}
        max={4}
        min={0}
        value={value}
        onChangeCommitted={(e, v: number) => {
          setValue(v)
          props.onChangeCommitted(e, v)
        }}
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