import React, { Component } from "react";

class ClassCounter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: ""
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count != this.state.count){
        console.log("Updating dcument title");
        document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => {
            this.setState({
              name: e.target.value
            });
          }}
        />
        <button
          onClick={() =>
            this.setState(prevState => {
              return {
                count: prevState.count + 1
              };
            })
          }
        >
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter1;
