import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './components/MarkdownInput';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import './sass/style.scss' ;

// clear.onClick = () => {
//   localStorage.clear();
//   document.location.reload();
// }

const App = () => (
  <React.Fragment>
    <div id="list-note">
      <AddNote />
      <NoteList />
    </div>
    <div id="note">
      <MarkdownInput />
    </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));