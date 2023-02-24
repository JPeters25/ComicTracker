import comicListReducer from "../reducers/comic-list-reducer"

describe('ticketListReducer', ()=> {
  
  const currentState = {
    1: {
      issues: 'Captain America #1',
      year: '1988',
      comments: 'Good Comic',
      id: 1
    }, 2: {
      issues: 'Spider-Man #1',
      year: '2023',
      comments: 'Great Comic',
      id: 2
    }

  }


  let action;
  const comicData = {
    issues: 'Captain America #1',
    year: '1988',
    comments: 'Good Comic',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(comicListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new comic data to mainComicList', () => {
    const { issues, year, comments, id } = comicData;
      action = {
        type: 'ADD_COMIC',
        issues: issues,
        year: year,
        comments: comments,
        id: id
      };

    expect(comicListReducer({}, action)).toEqual({
      [id] : {
        issues: issues,
        year : year, 
        comments : comments,
        id : id
      }
    });
  });

  test('Should successfully delete a comic', () => {
    action = {
      type: 'DELETE_COMIC',
      id :1
    };
    expect(comicListReducer(currentState, action)).toEqual({
      2: {
        issues: 'Spider-Man #1',
        year: '2023',
        comments: 'Great Comic',
        id: 2
      }
    });
  });

});