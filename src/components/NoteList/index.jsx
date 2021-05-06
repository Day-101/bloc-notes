import React from 'react';

const NoteList = () => {

  const values = Object.values(localStorage)

  return (
    <div className="card">
      {values.reverse().map(data => (
        <React.Fragment key={Math.random()}>
          <h1>{JSON.parse(data).title}</h1>
          <p>{JSON.parse(data).content}</p>
        </React.Fragment>
      ))}
    </div>
  )
}

export default NoteList;