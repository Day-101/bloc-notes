import React from 'react';

const AddNote = () => {
  const NewClick = () => {

    document.location.reload();
  }

  return (
    <button id="new" onClick={NewClick}>Ajouter une note</button>
  )
}

export default AddNote;