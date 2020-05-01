import React from "react"
import { Paper, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


interface ModalBodyContainer {
  children: React.ReactNode
}

export default (props: ModalBodyContainer) => {
  const classes = useStyle()

  return (
    <Container className={classes.container} maxWidth="sm">
      <Paper className={classes.texture} variant="outlined" elevation={5}>
        {props.children}
      </Paper>
    </Container>
  )
}

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    width: "100vw"
  },
  texture: {
    background: 'radial-gradient(closest-corner,#fcc53d, #ffbc15, #deb401)',
    opacity: 0.95
  }
}))