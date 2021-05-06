let n = 0

function render() {
  const title = React.createElement('h1', {}, 
    'Hello World',
    React.createElement('span', {}, n)
  )

  const items = ['item-1','item-2','item-3',]
  //const lis = items.map(item => <li>{item}</li>) // cette écriture ne possède pas de clé unique
  const lis = items.map((item, clef) => <li key={clef}>{item}</li>)

  const twoParaph = <React.Fragment>
      <p>Premier</p>
      <p>Deuxième</p>
      <ul>
        {lis}
      </ul>
    </React.Fragment>




  ReactDOM.render(twoParaph, document.querySelector('#app'))
}



render()

window.setInterval(() => {
  n++
  render()
}, 1000)