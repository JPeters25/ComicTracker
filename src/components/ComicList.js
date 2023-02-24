import React from "react";
import Comic from "./Comic";
import PropTypes from "prop-types";

function ComicList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.comicList).map((comic) =>
        <Comic 
          whenComicClicked = { props.onComicSelection }
          issues={comic.issues}
          year={comic.year}
          comments={comic.comments}
          id={comic.id}
          key={comic.id}/>
      )}
    </React.Fragment>
  );
}

ComicList.propTypes = {
  comicList: PropTypes.object,
  onComicSelection: PropTypes.func
}

export default ComicList;
