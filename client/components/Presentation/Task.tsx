import React from "react"
import { ListItem, Box, Container, Typography, IconButton, Badge, Slider, Chip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import TaskProgress from "./TaskProgress"
import EditItem from "../IconButtons/EditItem"
import MarkDone from "../IconButtons/MarkDone"
import TaskColContainer from "../Containers/TaskColContainer"

const useStyles = makeStyles({
  background: {
    backgroundColor: "#757575",
    opacity: 0.8
  }
})


export default () => {
  const classes = useStyles();

  return (
    <>
      <Badge anchorOrigin={{horizontal: "left", vertical: "top"}} badgeContent={<EditItem />}>
        <Box className={classes.background} mb={2} border={1} borderRadius={5} width="100%" boxShadow={3} display="inline-flex" justifyContent="center" alignItems="center" flexWrap="wrap" minWidth={0}>
          <TaskColContainer flexGrow={1} flexBasis={3}>
            <Box textAlign="center" fontWeight="fontWeightMedium" fontSize="h6.fontSize">
              Take out the bin
            </Box>
          </TaskColContainer>
          <TaskColContainer flexGrow={1} flexBasis={3} textVariant="overline">
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" >
              <Chip label="Workout" variant="outlined" size="small" />
            </Box>
          </TaskColContainer>
          <TaskColContainer flexGrow={1} flexBasis={3}>
            <TaskProgress />
          </TaskColContainer>
          <TaskColContainer flexBasis={3} >
            <MarkDone />
          </TaskColContainer>
        </Box>
      </Badge>
    </>
  )
}