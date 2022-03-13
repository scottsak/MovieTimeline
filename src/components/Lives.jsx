import React from "react";

function Lives(props){

  function Heart(){
    return(
      <img src={require('../images/heart.png')} alt="Girl in a jacket" width="50"></img>
    )
  }

  return (
  <div>
    <img src={require('../images/heart.png')} alt="heart" width="50"></img>
    <img src={require('../images/heart.png')} alt="heart" width="50"></img>
    <img src={require('../images/heart.png')} alt="heart" width="50"></img>
  </div>
)
}

export default Lives;
