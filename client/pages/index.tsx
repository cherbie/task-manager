import React, { useState, useEffect } from "react"
import { Box, Container, Modal, CircularProgress, Typography, IconButton } from "@material-ui/core"
import { SpeedDial, SpeedDialAction } from "@material-ui/lab"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveIcon from "@material-ui/icons/Save"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import { makeStyles } from "@material-ui/core/styles"
import SearchBar from "../components/SearchBar"
import ListContainer from "../components/ListContainer"
import DetailedItem from "../components/DetailedItem"
import ModalBodyContainer from "../components/ModalBodyContainer"

const useStyle = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw"
  },
  speedDial: {
    position: 'fixed',
    height: "auto",
    bottom: theme.spacing(4),
    right: theme.spacing(4)
  }
}))

const actions = [{icon: <AddCircleIcon />, name: "Add"},{ icon: <SaveIcon />, name: 'Save' }]

export default () => {
  const classes = useStyle()

  return (
    <Box component={Container} minHeight="100%" display="flex" justifyContent="center">
      <Box py={4} display="flex" justifyContent="center">
        <SearchBar />
      </Box>
      <Box py={2} display="flex" justifyContent="center">
        <ListContainer />
      </Box>
      <Box className={classes.footer} zIndex="tooltip">
        <SpeedDial
          className={classes.speedDial}
          ariaLabel="todo-options"
          icon={<SpeedDialIcon />}
          direction="up"
          open={false}
        >
          {actions.map((value, index) => (
            <SpeedDialAction
              icon={value.icon}
              key={index}
              tooltipTitle={value.name}
            />
          ))
          }
        </SpeedDial>
      </Box>
      <Modal open={true}>
        <div>
          <ModalBodyContainer>
            <DetailedItem />
          </ModalBodyContainer>
        </div>
      </Modal>
    </Box>
  )
}
