import React from 'react';

const Note = () => {

  const keys = Object.keys(localStorage)
  //localStorage.getItem(key)

  console.log(keys.length);
  console.log(keys[0]);


  return (
    <span />
  )
}

export default Note;
