import React from 'react';
import MarkdownView from 'react-showdown';

const NoteDisplay = ({text}) => {

  return (
    <React.Fragment>
      <MarkdownView
        markdown={text}
        options={{ tables: true, emoji: true }}
      />
    </React.Fragment>
  )
}

export default NoteDisplay;
