// function Welcome(props){
//   return <h1>Bonjour {props.name}</h1>
// }

/* Version destructurée */
function Welcome({name, children}){
  return <div>
    <h1>Bonjour {name}</h1>
    <p>{children}</p>
  </div>
}

//ReactDOM.render(<Welcome name="Day"/>, document.querySelector('#app'))
ReactDOM.render(<Welcome name="Day">Bonjour tout le monde</Welcome>, document.querySelector('#app'))