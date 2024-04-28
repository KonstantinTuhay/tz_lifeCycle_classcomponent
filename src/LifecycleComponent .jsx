import React from "react";

class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "",
      count: 0,
    };
  }

  componentDidMount() {
    console.log("--componentDidMount--");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((data) => this.setState({ txt: data.message }));
  }

  componentDidUpdate() {
    console.log("--componentDidUpdate--");
  }

  componentWillUnmount() {
    console.log("--componentWillMount--");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("--shouldComponentUpdate--");
  }

  render() {
    console.log("--render--");
    return (
      <>
        <button onClick={() => this.setState({ txt: "Something..." })}>
          update
        </button>
        <br />
        <img src={this.state.txt} alt="dogi" />
      </>
    );
  }
}

export default LifeCycleComponent;
