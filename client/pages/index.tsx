import React, { useState, useEffect } from "react"
import { Box, Container, Typography, IconButton } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from "@material-ui/core/styles"
import SearchBar from "../components/searchBar"
import ListContainer from "../components/listContainer"

const useStyle = makeStyles((theme) => ({
  addItem: {
    position: "sticky",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}))

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
      <Box className={classes.addItem} zIndex="tooltip">
        <IconButton>
          <AddCircleIcon htmlColor="green" fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  )
}
