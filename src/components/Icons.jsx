import React, { Component } from "react";

class MySkills extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfImages: [] };
  }
  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    const list = this.importAll(
      require.context("./../images/skills", false, /\.(png)$/)
    );
    this.setState({
      listOfImages: list
    });

   // const listItems = listOfImages.map((d) => <li key={d.name}>{d.name}</li>
    
  }

  render() {
    return (
      <> <h2>My Stack</h2>
      <center><div class="icons">
            {this.state.listOfImages.map((image, index ) => (
              <img class="imgicons" src={image} key={index} tabindex="1" alt=""></img>
            ))}</div></center>
      </>
    );
  }
}

export default MySkills;