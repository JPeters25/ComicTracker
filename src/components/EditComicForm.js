import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditComicForm (props) {
  const { comic } = props;

  function handleEditComicFormSubmission(event) {
    event.preventDefault();
    props.onEditComic({issues: event.target.issues.value, year: event.target.location.value, comments: event.target.comments.value, id: comic.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditComicFormSubmission}
        buttonText= "Update Comic" />
    </React.Fragment>
  )
}

EditComicForm.propTypes = {
  comic: PropTypes.object,
  onEditComic: PropTypes.func
}

export default EditComicForm;