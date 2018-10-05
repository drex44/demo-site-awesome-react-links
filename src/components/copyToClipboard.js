import React from "react";

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
            <button onClick={this.copy}>
            <i className="far fa-copy"></i>
            </button>
            {this.state.success}
          </div>
        )}
      </div>
    );
  }
}

export default CopyToClipboard;
