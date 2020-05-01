import React, { useState, useEffect } from "react"
import { Box, Container, Modal } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"
import SearchBar from "../components/Presentation/SearchBar"
import ListContainer from "../components/Containers/ListContainer"
import DetailedItem from "../components/Presentation/DetailedItem"
import ModalBodyContainer from "../components/Containers/ModalBodyContainer"
import UserActions from "../components/Presentation/UserActions"

const useStyle = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw"
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
      <Box className={classes.footer} zIndex="tooltip">
        <UserActions />
      </Box>
      <Modal open={false}>
        <div>
          <ModalBodyContainer>
            <DetailedItem />
          </ModalBodyContainer>
        </div>
      </Modal>
    </Box>
  )
}
