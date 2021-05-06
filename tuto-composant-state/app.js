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

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
    this.timer = null
  }

  componentDidMount () {
    this.timer = window.setInterval(this.tick.bind(this), 1000) // bind sert à ne pas perdre le contexte de this
  }

  componentWillUnmount () {
    window.clearInterval(this.timer)
  }

  tick () {
    this.setState({date: new Date()})
  }

  render() {
    return <div>
        Nous sommes le {this.state.date.toLocaleDateString()} et il est {this.state.date.toLocaleTimeString()}
      </div>
  }
}

class Incrementer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {n: props.start}
    this.timer = null
  }

  componentDidMount () {
    window.setInterval(this.timer.increment.bind(this), 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }
  increment() {
    this.setState((state, props) => ({n: this.state.n + 1}))
  }

  render() {
    
    return
    <div>Valeur: {this.state.n}</div>
  }
}

function Home() {
  return <div>
      <Welcome name="Day"/>
      <Welcome name="Logan"/>
      <Clock/>
      <Incrementer start={0} />
      <Incrementer start={101} step={64} />
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#app'))