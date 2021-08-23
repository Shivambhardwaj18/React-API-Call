import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          <span>{this.props.data}</span>
        </div>
        <button onClick={this.props.fetchData}>Fetch</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    fetchData: () => dispatch({ type: "FETCH_DATA" }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(App);
