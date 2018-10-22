import React, { Component } from "react";
import "./stars.css";

class Stars extends Component {
  state = {
    stargazers: [],
    teste: []
  };

  componentWillMount() {
    fetch(
      "https://api.github.com/repos/drex44/awesome-react-links/stargazers"
    )
      .then(response => response.json())
      .then(packageStargazers =>
        this.setState({ packageStargazers: packageStargazers.length })
      );
  }

  render() {
    return (
      <div>
        <RenderStargazers
          title="Stars of this package"
          stars={this.state.packageStargazers}
        />
      </div>
    );
  }
}

const RenderStargazers = props => {
  return (
    <div className="stars_count">{props.stars}<span title="stars on github"><span role="img" aria-label="stars">⭐</span> on GitHub</span></div>
  );
};

export default Stars;
