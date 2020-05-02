import React from "react"
import { Box, Container, OutlinedInput } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import useDebouncer from "../../hooks/useDebouncer"
import { connect } from "react-redux"
import { filterTasksSearch } from "../../redux/actions/taskActions"

interface ISearchBar {
  onSearch: any;
}

const SearchBar = (props: ISearchBar) => {
  const classes = useStyles();
  const debounceSearch = useDebouncer((str: string) => props.onSearch(str), 200)

  return (
    <Container className={classes.container}>
      <OutlinedInput id="todo-name-search" placeholder="Search"
        onChange={(e) => {
          debounceSearch(e.target.value)
        }}
        fullWidth={true} />
    </Container>
  )
}

const useStyles = makeStyles({
  container: {
    maxWidth: 600
  }
})

const mapDispatchToProps = dispatch => ({
  onSearch: (match: string) => {
    dispatch(filterTasksSearch(match.length !== 0, match)) // turn off filter if length == 0
  }
})

export default connect(null, mapDispatchToProps)(SearchBar)