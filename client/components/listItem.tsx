import React from "react"
import { ListItem, Box, Container, Typography, IconButton, Badge, Slider, Chip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles({
  background: {
    backgroundColor: "rgba(102,102,102,0.5)"
  }
})

const EditButtonIcon = () => (
  <IconButton edge="end" aria-label="edit">
    <EditIcon htmlColor="yellow" />
  </IconButton>
)

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

export default () => {
  const classes = useStyles();
  

  return (
    <>
      <Badge anchorOrigin={{horizontal: "left", vertical: "top"}} badgeContent={<EditButtonIcon />}>
        <Box className={classes.background} mb={2} border={1} borderRadius={5} width="100%" boxShadow={3} display="inline-flex" justifyContent="center" alignItems="center" flexWrap="wrap" minWidth={0}>
          <Box m={1} p={1} flexBasis={3} flexGrow={2}>
            <Typography align="center" noWrap={true} variant="body1" display="inline">
              Take out the bin
            </Typography>
          </Box>
          <Box m={1} p={1} flexBasis={3} display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" flexGrow={2}>
            <Chip label="Workout" variant="outlined"/>
          </Box>
          <Box m={1} flexBasis={3} flexGrow={1} p={1} minWidth={60}>
            <Slider
              marks={marks}
              max={4}
              min={0}
            />
          </Box>
          <Box flexBasis={1} m={1} p={1}>
            <IconButton>
              <DoneOutlineIcon htmlColor="green" />
            </IconButton>
          </Box>
        </Box>
      </Badge>
    </>
  )
}