import React from "react"
import { ListItem, Box, Container, Typography, IconButton, Badge, Slider, Chip, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import TaskProgress from "./TaskProgress"
import EditItem from "../IconButtons/EditItem"
import MarkDone from "../IconButtons/MarkDone"
import TaskColContainer from "../Containers/TaskColContainer"
import { ITask } from "../../Schema/state"

interface ITaskBrief {
  value: ITask;
  onEdit: any;
  onComplete: any;
  onProgressChange: any; // handle slider onChangeCommitted event
  id: number
}

export default (props: ITaskBrief) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Badge anchorOrigin={{horizontal: "left", vertical: "top"}} badgeContent={<EditItem onClick={() => console.log("marked for edit")} />}>
        <Box className={classes.panel} mb={2} border={1} width="100%" borderRadius={5} boxShadow={3}>
          <Grid container alignItems="center" justify="center" spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
              <TaskColContainer flexGrow={1} flexBasis={0}>
                <Box textAlign="left" fontWeight="fontWeightMedium" fontSize="h6.fontSize">
                  {props.value.title ? props.value.title : "..."}
                </Box>
              </TaskColContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TaskColContainer flexGrow={1} flexBasis={0} textVariant="overline">
                <Box display="flex" overflow="hidden" flexDirection="row" flexWrap="wrap" justifyContent="center" >
                  {props.value.tags.map((label, index) => (
                      <span key={index}>
                        <Chip label={label} key={index} variant="outlined" size="small" />
                      </span>
                    )
                  )}
                </Box>
              </TaskColContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TaskColContainer flexGrow={1} flexBasis={0}>
                <TaskProgress defaultValue={props.value.progress} onChangeCommitted={() => console.log("change committed")} />
              </TaskColContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={1}>
              <TaskColContainer flexBasis={0}>
                <MarkDone onClick={() => console.log("marked done")} />
              </TaskColContainer>
            </Grid>
          </Grid>
        </Box>
      </Badge>
    </React.Fragment>
  )
}


// -- Styling -- 
const useStyles = makeStyles({
  panel: {
    backgroundColor: "#FFFFFF", // panel background
    opacity: 0.8
  }
})