import React, { Component } from "react";
import UploadForm from "./components/UploadForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formCount: 1,
      images: []
    };
  }

  formHandler = value => {
    console.log(value);
    this.setState({
      formCount: this.state.formCount + 1,
      images: [...this.state.images, value]
    });
  };

  render() {
    let forms = [];
    for (let i = 1; i <= this.state.formCount; i++) {
      forms.push(
        <UploadForm
          formHandler={this.formHandler}
          key={i}
          id={i}
          imageURL={
            this.state.images[i - 1] ? this.state.images[i - 1].imageURL : null
          }
        />
      );
    }
    return <div className="container">{forms}</div>;
  }
}

export default App;
