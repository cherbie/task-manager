import React from "react"
import { Box, Badge, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TaskProgress from "./TaskProgress"
import EditItem from "../IconButtons/EditItem"
import MarkDone from "../IconButtons/MarkDone"
import TaskColContainer from "../Containers/TaskColContainer"
import { ITask } from "../../schema/state"
import Tags from "./Tags"

interface ITaskBrief {
  task: ITask;
  onEdit: any;
  onComplete: any;
  onProgressChange: any; // handle slider onChangeCommitted event
  id: number
}

export default (props: ITaskBrief) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Badge anchorOrigin={{horizontal: "left", vertical: "top"}} badgeContent={<EditItem id={props.id} onClick={() => props.onEdit(props.id, props.task)} />}>
        <Box className={classes.panel} mb={2} border={1} width="100%" borderRadius={5} boxShadow={3}>
          <Grid container alignItems="center" justify="center" spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
              <TaskColContainer flexGrow={1} flexBasis={0}>
                <Box textAlign="center" fontWeight="fontWeightMedium" fontSize="h6.fontSize" overflow="visible" whiteSpace="normal">
                  {props.task.title ? props.task.title : "..."}
                </Box>
              </TaskColContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TaskColContainer flexGrow={1} flexBasis={0} textVariant="overline">
                <Box display="flex" overflow="hidden" flexDirection="row" flexWrap="wrap" justifyContent="center" >
                  <Tags tags={props.task.tags} />
                </Box>
              </TaskColContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TaskColContainer flexGrow={1} flexBasis={0}>
                <TaskProgress value={props.task.progress} onChangeCommitted={(e, value) => props.onProgressChange(props.id, value)} />
              </TaskColContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={1}>
              <TaskColContainer flexBasis={0}>
                <Box display="flex" justifyContent="center">
                  <MarkDone id={props.id} onClick={() => props.onComplete(props.id)} />
                </Box>
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