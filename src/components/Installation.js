import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./renderer";
import CopyToClipboard from "./copyToClipboard";

export const Installation = props => {
  let source = `npm i awesome-react-links`;
  let markdownSource = `\`\`\`js
    ${source}
`;

  let source2 = `yarn add awesome-react-links`;
  let markdownSource2 = `\`\`\`js
  ${source2}
`;

  return (
    <div className="example installation">
      <div className="code-block two">
        <div className="code-block-inner">
          <ReactMarkdown
            source={markdownSource}
            renderers={{ code: CodeBlock }}
          />
        </div>
        <CopyToClipboard>{source}</CopyToClipboard>
      </div>
      <br />
      <div className="code-block two">
        <div className="code-block-inner">
          <ReactMarkdown
            source={markdownSource2}
            renderers={{ code: CodeBlock }}
          />
        </div>
        <CopyToClipboard>{source2}</CopyToClipboard>
      </div>
    </div>
  );
};
