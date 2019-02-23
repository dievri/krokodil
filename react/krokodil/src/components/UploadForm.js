import React, { Component } from "react";
import axios from 'axios';

class UploadForm extends Component {
  state = {
    word: "",
    imageURL: "",
    disabled: false
  };

  componentDidMount() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  testFetch() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch('https://i.imgur.com/s3InkBw.jpg').then(response => console.log(response.body.getReader()));
  }

  testPost() {
    axios.post('/post-image', {
      keyword: this.state.word,
      imageURL: this.state.imageURL
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    
  }


  handleSubmit(e) {
    e.preventDefault();
    this.testPost()
    this.setState({
      disabled: true
    });
    let value = {
      id: this.props.id,
      word: this.state.word,
      imageURL: this.state.imageURL
    };
    this.props.formHandler(value);
  }
  render() {
    return (
      <div>
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="row mt-3">
          <div className="col-4">
            <div className="form-group">
              <input
                name="word"
                type="text"
                className="form-control"
                id="word"
                placeholder="Кодовое слово"
                value={this.state.word}
                disabled={this.state.disabled}
                onChange={e => this.handleInputChange(e)}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <input
                name="imageURL"
                type="text"
                className="form-control"
                id="img-url"
                placeholder="Image URL"
                value={this.state.imageURL}
                disabled={this.state.disabled}
                onChange={e => this.handleInputChange(e)}
              />
            </div>
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Upload"
              className="btn btn-outline-primary"
              disabled={this.state.disabled}
            />
          </div>
          <div className="col-2">
            {this.props.imageURL ? (
              <a
                href={this.props.imageURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={this.props.imageURL} alt="preview" id="preview" />
              </a>
            ) : null}
          </div>
        </div>
        
      </form>
      <button className="btn btn-outline-primary" value="testFetch" onClick={this.testFetch}>testFetch</button> 
      </div>
    );
  }
}

export default UploadForm;
