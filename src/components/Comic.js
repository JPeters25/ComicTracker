import React from "react";
import PropTypes from "prop-types";

function Comic(props){
  return (
    <React.Fragment>
      <h3>{props.issues} - {props.year}</h3>
      <p><em>{props.comments}</em></p>
    </React.Fragment>
  );
}

Comic.propTypes = {
  issues: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  comments: PropTypes.string
};

export default Comic;