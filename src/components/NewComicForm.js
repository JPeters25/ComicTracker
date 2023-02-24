import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewComicForm(props){

  function handleNewComicFormSubmission(event) {
    event.preventDefault();
    props.onNewComicCreation({
      issues: event.target.issues.value,
      year: event.target.year.value,
      comments: event.target.comments.value,
      id: v4()
    });
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewComicFormSubmission}>
        <input
          type='text'
          name='issues'
          placeholder='Comic Issue' />
        <input
          type='text'
          name='year'
          placeholder='year' />
        <input
          type='text'
          name='comments'
          placeholder='comments on issue' />
        <button type='submit'>submit</button>
      </form>
    </React.Fragment>
  );
}

NewComicForm.propTypes = {
  onNewComicCreation: PropTypes.func
}

export default NewComicForm;