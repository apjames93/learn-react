class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick={this.handleVisibilityToggle}>
                    {this.state.visibility ? 'Hide' : 'show'}
                </button>
                {this.state.visibility && (
                        <div>
                            <p>
                                you can see me
                            </p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))