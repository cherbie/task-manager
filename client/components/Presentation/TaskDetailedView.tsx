import React, { useState } from "react"
import { Box, Container, TextField, Button, Paper, Input, FormLabel, Chip, IconButton, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from '@material-ui/icons/Add'
import TaskProgress from "./TaskProgress"
import { useFormik } from "formik"
import * as Yup from "yup"

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

// Form input validation schema
const TaskFormSchema = Yup.object().shape({
  title: Yup.string().required("This field is required."),
  description: Yup.string(),
  tags: Yup.array().of(Yup.string()).max(3, "Error! Too many tags."),
  progress: Yup.number().min(0).max(4)
})

export default () => {
  const [tagString, setAddTag] = useState("")


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
    }),
    validationSchema: TaskFormSchema,
    validateOnBlur: true,
    validateOnChange: false,
    validateOnMount: false
  })

  const addTag = (name: string) => {
    formik.setFieldTouched("tags", true, true)
    let values = formik.values.tags
    values.push(name)
    formik.setFieldValue("tags", values, true)
  }

  return (
    <Container>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
          <Box my={1} py={2} width="50%">
            <Input id="task-title" name="title" onChange={formik.handleChange} error={formik.errors.title && formik.touched.title} placeholder="Title"/>
          </Box>
          <Box width="80%" my={1} py={2}>
            <Input id="task-description" name="description" placeholder="Description" onChange={formik.handleChange} multiline={true} fullWidth={true} />
          </Box>
          <Box my={1} py={2} width="100%" display="flex" justifyContent="center" flexDirection="column" alignItems="center"> 
            <Box width="50%">
              <Input error={formik.errors.tags && formik.touched.tags} id="add-tag" name="tag-input" placeholder="Add Tag" onChange={(e) => setAddTag(e.target.value)}/>
              <IconButton onClick={() => {
                addTag(tagString)
                setAddTag("")
              }}>
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
            <Box width="100%" display="flex" justifyContent="center">
              {formik.values.tags.map((value, index) => (<Box mx={1}><Chip key={index} label={value} onDelete={() => console.log("delete")} /></Box>))}
            </Box>
          </Box>
          <Box my={1} py={2} width="50%">
            <TaskProgress inputProps={{name:"progress", onChangeCommitted: formik.handleChange}} />
          </Box>
        </Box>
        <Box my={1} width="100%" display="flex" justifyContent="center">
          <Button variant="contained" size="small" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  )
}