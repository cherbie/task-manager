import React, { useState } from "react"
import { Box, Container, TextField, Button, Paper, Input, FormLabel, Chip, IconButton, Typography, Tooltip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from '@material-ui/icons/Add'
import TaskProgress from "./TaskProgress"
import { useFormik } from "formik"
import { ITask } from "../../Schema/state"
import * as Yup from "yup"

interface ITaskDetailedView {
  onSubmit: any;
  onExit: any;
  values?: ITask
}

export default (props: ITaskDetailedView) => {
  const [tagInput, setTagInput] = useState("")


  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      tags: ["homework", "work"],
      progress: 0
    },
    onSubmit: (values => {
      console.log("submitted forms")
      console.log(values)
      props.onSubmit(values)
      props.onExit()
    }),
    validationSchema: TaskFormSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false
  })

  const addTag = (name: string) => {
    formik.setFieldTouched("tags", true, true)
    TagLabelSchema.isValid(name) // Yup schema validation on tag input
      .then((valid) => {
        if(!formik.errors.tags && valid) {
          formik.setFieldValue("tags", [...formik.values.tags, name], true)
          setTagInput("") // empty input
        }
      }).catch(err => console.log(err))
  }

  const deleteTag = (id: number) => {
    let values = formik.values.tags.filter((value, index) => index !== id)
    formik.setFieldValue("tags", values, true)
  }

  const updateProgress = (value: number) => {
    ProgressSchema.isValid(value).then((valid) => {
      if(valid)
        formik.setFieldValue("progress", value, false)
    }).catch(err => console.log(err))
  }

  return (
    <Container>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
          <Box my={1} py={2} width="50%" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
            <Tooltip title={formik.errors.title ? formik.errors.title : "Required"}>
              <span>
                <Input id="task-title" name="title" onChange={formik.handleChange} value={formik.values.title} error={formik.errors.title && formik.touched.title} placeholder="Title"/>
              </span>
            </Tooltip>
          </Box>
          <Box width="80%" my={1} py={2}>
            <Input id="task-description" name="description" placeholder="Description" value={formik.values.description} onChange={formik.handleChange} multiline={true} fullWidth={true} />
          </Box>
          <Box my={1} py={2} width="100%" display="flex" justifyContent="center" flexDirection="column" alignItems="center"> 
            <Box width="50%" display="flex" justifyContent="center" flexWrap="wrap">
              <Input error={formik.errors.tags && formik.touched.tags} id="add-tag" name="tag-input" placeholder="Add Tag" value={tagInput} onChange={(e) => setTagInput(e.target.value)}/>
              <IconButton onClick={() => addTag(tagInput)}>
                <AddIcon />
              </IconButton>
            </Box>
            {formik.errors.tags && formik.touched.tags ? (
              <Box>
                <Typography>
                  {formik.errors.tags}
                </Typography>
              </Box>
            ) : null
            }
            <Box width="80%" display="flex" justifyContent="center" flexWrap="wrap">
              {formik.values.tags.map((value, index) => (
                <Box key={index} mx={1} mt={1}>
                  <Chip color="primary" label={value} onDelete={() => deleteTag(index)} />
                </Box>
              ))}
            </Box>
          </Box>
          <Box my={1} py={2} width="50%">
            <TaskProgress inputProps={{name:"progress", onChangeCommitted: (event, value) => updateProgress(value)}} />
          </Box>
        </Box>
        <Box my={1} width="100%" display="flex" justifyContent="center">
          <Button color="secondary" variant="text" size="small" type="reset" onClick={() => props.onExit()}>
            <Box color="error.main"><Typography variant="inherit">Exit</Typography></Box>
          </Button>
          <Button color="primary" variant="contained" size="small" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  )
}

const TagLabelSchema = Yup.string().min(1, "Tag must have contents").max(10, "Tag label cannot exceed 10 characters")

const ProgressSchema = Yup.number().min(0).max(4)

// Form input validation schema
const TaskFormSchema = Yup.object().shape({
  title: Yup.string().required("This field is required"),
  description: Yup.string(),
  tags: Yup.array().of(TagLabelSchema),
  progress: ProgressSchema
})