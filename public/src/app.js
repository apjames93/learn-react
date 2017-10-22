class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    const options = ['this one', 'thing two', 'this three', 'thing four']

    return (
      <div>
        <Header title={title}/>
        <Action/>
        <Options options={options}/>
        <AddOptions/>
      </div>
    )
  }
}

class  Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/> )
        }
      </div>
    )
  }
}

class Option extends React.Component { 
  render() {
    return ( 
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOptions extends React.Component {
  render() {
    return (
      <div>
        add option componet here
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))