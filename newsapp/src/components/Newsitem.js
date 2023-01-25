//import PropTypes from "prop-types";
import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageURL, newsURL } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageURL} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsURL} target="_blank" className="btn btn-primary btn-sm">
              Read more ...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;