(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal"],{

/***/ "./client/components/Containers/TaskDetailedViewContainer.tsx":
/*!********************************************************************!*\
  !*** ./client/components/Containers/TaskDetailedViewContainer.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Presentation_TaskDetailedView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Presentation/TaskDetailedView */ "./client/components/Presentation/TaskDetailedView.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/modalActions */ "./client/redux/actions/modalActions.tsx");
/* harmony import */ var _redux_actions_taskActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/taskActions */ "./client/redux/actions/taskActions.tsx");








var TaskDetailedViewContainer = function TaskDetailedViewContainer(props) {
  var classes = useStyle();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: classes.container,
    maxWidth: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.texture,
    variant: "outlined",
    elevation: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Presentation_TaskDetailedView__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: props.utility.modal.index,
    task: props.utility.modal.task,
    onSubmit: props.onSubmit,
    onExit: props.onExit
  }))));
};

var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100vh",
      width: "100vw"
    },
    texture: {
      opacity: 0.9
    }
  };
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    utility: state.utility,
    tasks: state.tasks
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onExit: function onExit() {
      return dispatch(_redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_5__["closeModal"]);
    },
    onSubmit: function onSubmit(id, task) {
      if (id === void 0) {
        id = -1;
      }

      dispatch(Object(_redux_actions_taskActions__WEBPACK_IMPORTED_MODULE_6__["addTask"])(id, task));
      dispatch(_redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_5__["closeModal"]);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(TaskDetailedViewContainer));

/***/ }),

/***/ "./client/components/Presentation/TaskDetailedView.tsx":
/*!*************************************************************!*\
  !*** ./client/components/Presentation/TaskDetailedView.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TaskProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskProgress */ "./client/components/Presentation/TaskProgress.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _Schema_defaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Schema/defaults */ "./client/Schema/defaults.tsx");
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tags */ "./client/components/Presentation/Tags.tsx");
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};









/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      tagInput = _a[0],
      setTagInput = _a[1];

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    initialValues: Object.assign({}, _Schema_defaults__WEBPACK_IMPORTED_MODULE_6__["defaultTask"], props.id !== -1 ? props.task : {}),
    onSubmit: function onSubmit(values) {
      props.onSubmit(props.id, values);
    },
    validationSchema: TaskFormSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false
  });

  var addTag = function addTag(name) {
    formik.setFieldTouched("tags", true, true);
    TagLabelSchema.validate(name) // Yup schema validation on tag input
    .then(function (value) {
      formik.setFieldError("tags", undefined); // no error

      formik.setFieldValue("tags", __spreadArrays(formik.values.tags, [value]), true);
      setTagInput(""); // empty input
    })["catch"](function (err) {
      // handle validation error
      formik.setFieldError("tags", err.message);
    });
  };

  var deleteTag = function deleteTag(id) {
    var values = formik.values.tags.filter(function (value, index) {
      return index !== id;
    });
    formik.setFieldValue("tags", values, true);
  };

  var updateProgress = function updateProgress(value) {
    ProgressSchema.validate(value).then(function (value) {
      formik.setFieldValue("progress", value, false);
    })["catch"](function (err) {
      return console.log(err.message);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: formik.handleSubmit,
    onReset: formik.handleReset
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    my: 1,
    py: 2,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: formik.errors.title ? formik.errors.title : "Required"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    id: "task-title",
    name: "title",
    onChange: formik.handleChange,
    value: formik.values.title,
    error: formik.errors.title && formik.touched.title ? true : false,
    placeholder: "Title"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "80%",
    my: 1,
    py: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    id: "task-description",
    name: "description",
    placeholder: "Description",
    value: formik.values.description,
    onChange: formik.handleChange,
    multiline: true,
    fullWidth: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    my: 1,
    py: 2,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    error: formik.errors.tags && formik.touched.tags ? true : false,
    id: "add-tag",
    inputProps: {
      maxLength: 10
    },
    name: "tag-input",
    placeholder: "Add Tag",
    value: tagInput,
    onChange: function onChange(e) {
      return setTagInput(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: formik.errors.tags && formik.touched.tags ? formik.errors.tags : "Add"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: function onClick() {
      return addTag(tagInput);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default.a, null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tags__WEBPACK_IMPORTED_MODULE_7__["default"], {
    tags: formik.values.tags,
    container: {
      mx: 1,
      mt: 1
    },
    element: {
      color: "primary",
      onDelete: function onDelete(id) {
        return deleteTag(id);
      }
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    my: 1,
    py: 2,
    width: "50%"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskProgress__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "progress",
    value: formik.values.progress,
    onChangeCommitted: function onChangeCommitted(event, value) {
      return updateProgress(value);
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    my: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "secondary",
    variant: "text",
    size: "small",
    type: "reset",
    onClick: function onClick() {
      return props.onExit();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: "error.main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "inherit"
  }, "Exit"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    variant: "contained",
    size: "small",
    type: "submit"
  }, "Submit")))));
});
var TagLabelSchema = yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(1, "Tag must have contents").max(10, "Tag label cannot exceed 10 characters");
var ProgressSchema = yup__WEBPACK_IMPORTED_MODULE_5__["number"]().min(0).max(4); // Form input validation schema

var TaskFormSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required("This field is required"),
  description: yup__WEBPACK_IMPORTED_MODULE_5__["string"](),
  tags: yup__WEBPACK_IMPORTED_MODULE_5__["array"]().of(TagLabelSchema),
  progress: ProgressSchema
});

/***/ })

}]);
//# sourceMappingURL=modal.bundle.js.map