import React from "react";
import PropTypes from "prop-types";

function Comic(props){
  return (
    <React.Fragment>
        <div onClick = {() => props.whenComicClicked(props.id)}>
        <h3>{props.issues} - {props.year}</h3>
        <p><em>{props.comments}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Comic.propTypes = {
  issues: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  comments: PropTypes.string,
  id: PropTypes.string,
  whenComicClicked: PropTypes.func
};

export default Comic;