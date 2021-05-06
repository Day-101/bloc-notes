import React from 'react';
import { useState } from 'react';
import NoteDisplay from 'components/NoteDisplay';

const MarkdownInput = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const contentChange = (e) => {
    setContent(e.target.value);
  };
  const SaveClick = () => {
    const note = {
      title: title,
      content: content
    }
    localStorage.setItem(title, JSON.stringify(note));
    document.location.reload();
  }
  
  return (
    <React.Fragment>
      <div id="note-render">
        <h1 id="title">{title}</h1>
        <NoteDisplay text={content} />
      </div>
      <input value={title} onChange={titleChange} />
      <textarea value={content} onChange={contentChange} />
      <button id="save" onClick={SaveClick}>Sauvegarder</button>
    </React.Fragment>
  );
}

export default MarkdownInput;
