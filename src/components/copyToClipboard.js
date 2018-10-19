import React from "react";
import {findDOMNode} from 'react-dom'
import ReactTooltip from 'react-tooltip'

class CopyToClipboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { success: null };
  }

  copy = e => {
    e.preventDefault();

    let textArea = document.createElement("textarea");
    textArea.value = this.props.children;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        this.setState({ success: "Copied!" });
      } else {
        console.error("Fallback: Oops, unable to copy");
      }
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
    this.setState({ success: "Copied!" });
  };

  render() {
    return (
      <div>
        {/* queryCommandSupported checks that the copy functionality is available */
        document.queryCommandSupported("copy") && (
          <div>
            {this.state.success}
            <p ref='foo' data-tip='copied!'></p>
            <p ref='foo2' data-tip='copy'></p>
            <button 
            onClick={() => { ReactTooltip.show(findDOMNode(this.refs.foo)) }}
            onMouseEnter={() => {ReactTooltip.show(findDOMNode(this.refs.foo2))}}
            onMouseLeave={() => {ReactTooltip.hide(findDOMNode(this.refs.foo2))}}>
              <i className="far fa-copy"></i>
            </button>
            <ReactTooltip />
          </div>
        )}
      </div>
    );
  }
}

export default CopyToClipboard;
