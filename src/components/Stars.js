import React, { Component } from "react";

const RenderStargazers = props => {
  return (
    <div>
      <a
        class="github-button"
        href={props.repoLink}
        data-size="large"
        data-show-count="true"
        aria-label="Star drex44/awesome-react-links on GitHub"
      >
        Star
      </a>
    </div>
  );
};

export default RenderStargazers;
