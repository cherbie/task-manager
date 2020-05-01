import React from "react"
import { Container, List, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Task from "../Presentation/Task"

const useStyles = makeStyles({
  container: {
    
  }
})

export default () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      <Box width="100%" display="flex" flexDirection="column">
        {[0, 2, 3,4,4,4,4,4,4,4,3].map((value, index) => {
          return (
            <Task key={index} />
          )
          })}
      </Box>
    </Container> 
  )
}