function WelcomeFunc({name, children}){
  return <div>
    <h1>Bonjour {name}</h1>
    <p>{children}</p>
  </div>
}

class Welcome extends React.Component {

  constructor (props) { // facultatif sauf si besoin de constructeur
    super(props) // obligatoire pour appeler la méthode parent
    console.log(props);
  }

  render() {  // obligatoire
    console.log(this.props);
    return <div>
      <h1>Bonjour {this.props.name}</h1>
      <p>{this.props.children}</p>
    </div>

  }
}

function Home() {
  return <div>
    <Welcome name="Day"/>
    <Welcome name="Logan"/> // Exemple de réutilisation d'un composant
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#app'))