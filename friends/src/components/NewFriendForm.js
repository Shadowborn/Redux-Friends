import React, { Component } from 'react';
import axios from 'axios';
import { axiosWithAuth } from "../axiosWithAuth";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    //   age: '',
    //   height: ''
    };
    console.log("SmurfForm constructor props", props)
  }

  addSmurf = e => {
    console.log("Add new smurf state", this.state)
    e.preventDefault();
    // add code to create the smurf using the api
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', this.state)
      .then(res => {
        this.setState({
          name: '',
        //   age: '',
        //   height: ''
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          {/* <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          /> */}
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
