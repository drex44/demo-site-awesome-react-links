import React, { Component } from "react";
import AwesomeLinks, { TwoPartsLinks } from "awesome-react-links";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./renderer";
import CopyToClipboard from "./copyToClipboard";
import "./example.css";

export const ParameterExample = props => {
  let source = `
  \`\`\`html
  <AwesomeLinks linkStyle="${props.linkStyle}" 
    customStyles={{
      linkColor: "black",
      linkHoverColor: "red",
      color1: "blue",
      color2: "black",
      color3: "yellow"
    }}
  >
    <a href="#">Awesome react-links</a>
  </AwesomeLinks>
  \`\`\`
      `;
  return (
    <div className="example">
      <div className="one">
        <AwesomeLinks
          linkStyle={props.linkStyle}
          customStyles={{
            linkColor: "white",
            linkHoverColor: "#fbc638",
            color1: "#6225e6",
            color2: "#fbc638",
            color3: "black"
          }}
        >
          <a href="#">Awesome React Links</a>
        </AwesomeLinks>
      </div>
      <div className="code-block two">
        <ReactMarkdown source={source} renderers={{ code: CodeBlock }} />
      </div>
    </div>
  );
};

class Example extends Component {
  render() {
    let source = `<AwesomeLinks linkStyle="${this.props.linkStyle}">
  <a href="#">Awesome react-links</a>
</AwesomeLinks>`;
    let markdownSource = `
\`\`\`html
${source}
\`\`\`
    `;
    return (
      <div className="example">
        <div className="one">
          <AwesomeLinks linkStyle={this.props.linkStyle}>
            <a href="#">Awesome React Links</a>
          </AwesomeLinks>
        </div>
        <div className="code-block two">
          <CopyToClipboard>{source}</CopyToClipboard>
          <ReactMarkdown
            source={markdownSource}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </div>
    );
  }
}

export class TwoPartsExample extends Component {
  render() {
    let source = `
\`\`\`html
<TwoPartsLinks linkStyle="${
      this.props.linkStyle
    }" href="#" firstPart="Awesome" secondPart="react-links" />
\`\`\`
    `;
    return (
      <div className="example">
        <div class="one">
          <TwoPartsLinks
            linkStyle={this.props.linkStyle}
            href="#"
            firstPart="Awesome"
            secondPart="react-links"
          />
        </div>
        <div className="code-block two">
          <ReactMarkdown source={source} renderers={{ code: CodeBlock }} />
        </div>
      </div>
    );
  }
}

export default Example;
