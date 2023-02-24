import React from "react";
import Comic from "./Comic";

const mainComicList = [
  {
    issues:'Captain America #1',
    year:'1963',
    comments:'Very good' 
  },
  {    
    issues:'Spider-Man #1',
    year:'1999',
    comments:'So good, loved it'
  },
  {
    issues:'X-Men #1',
    year:'1988',
    comments:'Kinda boring'
  }
];

return (
  <React.Fragment>
    <hr/>
    {mainComicList.map((issue, index) =>
      <Comic issues={Comic.issues}
          year={ticket.year}
          comments={ticket.comments}
          key={index}/>
    )}
  </React.Fragment>
);

// function ComicList(){
//   return (
//   );
// }

export default ComicList;
