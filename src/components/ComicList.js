import React from "react";
import Comic from "./Comic";
import PropTypes from "prop-types";

function ComicList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.comicList.map((comic, index) =>
        <Comic issues={comic.issues}
          year={comic.year}
          comments={comic.comments}
          key={index}/>
      )}
    </React.Fragment>
  );
}

ComicList.propTypes = {
  comicList: PropTypes.array
}

export default ComicList;
