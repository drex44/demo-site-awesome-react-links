import React, { Component } from "react";
import "./contributors.css";

class Contributors extends Component {
  state = {
    contributors: [],
    packageContributors: []
  };

  componentWillMount() {
    fetch(
      "https://api.github.com/repos/drex44/demo-site-awesome-react-links/contributors"
    )
      .then(res => res.json())
      .then(contributors => this.setState(() => ({ contributors })));
    fetch(
      "https://api.github.com/repos/drex44/awesome-react-links/contributors"
    )
      .then(res => res.json())
      .then(packageContributors =>
        this.setState(() => ({ packageContributors }))
      );
  }

  render() {
    return (
      <div>
        <RenderContributors
          title="Contributors of this site"
          contributors={this.state.contributors}
        />
        <RenderContributors
          title="Contributors of the original package"
          contributors={this.state.packageContributors}
        />
      </div>
    );
  }
}

const RenderContributors = props => {
  return (
    <div>
      <div>
        <center>
          <h2>{props.title}</h2>
        </center>
      </div>
      <div className="contributors">
        {props.contributors.length === 0 ? (
          <p>loading...</p>
        ) : (
          props.contributors.map(({ login, html_url, avatar_url }, index) => {
            return (
              <a href={html_url} key={index} className="contributor">
                <img
                  className="contributor__avatar"
                  src={avatar_url}
                  alt="contributor"
                />
                <p className="contributor__name">{login}</p>
              </a>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Contributors;
