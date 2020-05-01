import React from "react"
import { ListItem, Box, Container, Typography, IconButton, Badge, Slider, Chip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ItemProgress from "./ItemProgress"
import EditItem from "./IconButtons/EditItem"
import MarkDone from "./IconButtons/MarkDone"

const useStyles = makeStyles({
  background: {
    backgroundColor: "rgba(102,102,102,0.5)"
  }
})


export default () => {
  const classes = useStyles();

  return (
    <>
      <Badge anchorOrigin={{horizontal: "left", vertical: "top"}} badgeContent={<EditItem />}>
        <Box className={classes.background} mb={2} border={1} borderRadius={5} width="100%" boxShadow={3} display="inline-flex" justifyContent="flex-start" alignItems="center" flexWrap="wrap" minWidth={0}>
          <Box m={1} p={1} flexGrow={1} flexBasis={3}>
            <Typography align="center" noWrap={true} variant="body1" display="inline">
              Take out the bin
            </Typography>
          </Box>
          <Box m={1} p={1} flexGrow={1} flexBasis={3} display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" >
            <Chip label="Workout" variant="outlined"/>
          </Box>
          <Box m={1} flexGrow={1} flexBasis={3} p={1}>
            <ItemProgress />
          </Box>
          <Box flexBasis={3} m={1} p={1}>
            <MarkDone />
          </Box>
        </Box>
      </Badge>
    </>
  )
}