import React from "react"
import { Box, Container, OutlinedInput } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
  container: {
    maxWidth: 600
  }
})

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <OutlinedInput id="todo-name-search" placeholder="Search" fullWidth={true} />
    </Container>
  )
}