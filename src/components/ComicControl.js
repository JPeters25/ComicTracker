import React from "react";
import NewComicForm from "./NewComicForm";
import ComicList from "./ComicList";
import ComicDetail from "./ComicDetail";
import EditComicForm from './EditComicForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class ComicControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedComic: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedComic != null) {
      this.setState({
        formVisibleOnPage:false,
        selectedComic: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewComicToList = (newComic) => {
    const { dispatch } = this.props;
    const {id, issues, year, comments } = newComic;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      issues: issues,
      year: year,
      comments: comments,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

   handleChangingSelectedComic = (id) => {
      const selectedComic = this.state.mainComicList[id];
      this.setState({selectedComic: selectedComic});
   }

   handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
   }

   handleEditingComicInList = (comicToEdit) => {
    const { dispatch } = this.props;
    const { id, issues, year, comments } = comicToEdit;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      issues: issues,
      year: year,
      comments: comments,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedComic:null
    });
  }

   handleDeletingComic = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id : id
    }
    dispatch(action);
    this.setState({selectedComic: null});
  }

  render(){
    let currentlyVisibleState = 
    <ComicDetail
      comic = {this.state.selectedComic}
      onClickingDelete = {this.handleDeletingComic}
      onClickingEdit = {this.handleEditClick} />
    let buttonText = null;

    if (this.state.editing) { 
      currentlyVisibleState = <EditComicForm comic = {this.state.selectedComic} onEditTicket = {this.handleAddingNewComicToList} />
      buttonText= "Return to Comic List";

    } else if (this.state.selectedComic !=null) {
      currentlyVisibleState = <ComicDetail comic = {this.state.selectedComic} onClickingDelete = {this.handleDeletingComic} />
      buttonText = "Return to Comic List";
    } 
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewComicForm onNewComicCreation={this.handleAddingNewComicToList} />
      buttonText = "Return to Comic List";
    } else {
      currentlyVisibleState = <ComicList comicList={this.props.mainComicList} onComicSelection={this.handleChangingSelectedComic} />;
      buttonText = "Add Comic";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {<button onClick={this.handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }

}

ComicControl.propTypes = {
  mainComicList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainComicList: state
  }
}

ComicControl = connect(mapStateToProps)(ComicControl);

export default ComicControl;