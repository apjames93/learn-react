class  Header extends React.Component {
  render() {
    return <p>this is the header</p>
  }
}

const jsx = (
  <div>
    <h1>Title</h1>
    <Header/>
  </div>
)
ReactDOM.render(jsx, document.getElementById('app'))