import React from "react";
import PropTypes from "prop-types";

function ComicDetail(props){
  const { comic, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Comic Detail</h1>
      <h3>{comic.issue} - {comic.year}</h3>
      <p><em>{comic.comments}</em></p>
      <button onClick={ props.onClickingEdit }>Update Comic</button>
      <button onClick={()=> onClickingDelete(comic.id) }>Delete Comic</button>
      <hr/>
    </React.Fragment>
  )
}

ComicDetail.propTypes = {
  comic: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ComicDetail;