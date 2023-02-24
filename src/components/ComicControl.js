import React from "react";
import NewComicForm from "./NewComicForm";
import ComicList from "./ComicList";
import ComicDetail from "./ComicDetail";

class ComicControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainComicList: [],
      selectedComic: null
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewComicToList = (newComic) => {
    const newMainComicList = this.state.mainComicList.concat(newComic);
    this.setState({
      mainComicList: newMainComicList,
      formVisibleOnPage:false 
    });
   }

   handleChangingSelectedComic = (id) => {
      const selectedComic = this.state.mainComicList.filter(comic => comic.id === id)[0];
      this.setState({selectedComic: selectedComic});
   }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedComic !=null) {
      currentlyVisibleState = <ComicDetail comic = {this.state.selectedComic} />
      buttonText = "Return to Comic List";
    } 
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewComicForm onNewComicCreation={this.handleAddingNewComicToList} />
      buttonText = "Return to Comic List";
    } else {
      currentlyVisibleState = <ComicList comicList={this.state.mainComicList} onComicSelection={this.handleChangingSelectedComic} />;
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

export default ComicControl;