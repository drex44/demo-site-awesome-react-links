import React, { Component } from "react";
import "./App.css";
import Example, {
  TwoPartsExample,
  ParameterExample
} from "./components/example";

const componentStyles = {
  marginBottom: "2.5em",
  padding: "1em"
};

const Information = props => {
  return (
    <div style={{ margin: "5em 0em 5em 25em" }}>
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  );
};

class App extends Component {
  render() {
    var linkStylesNames = [
      "highlight1",
      "highlight2",
      "highlight3",
      "highlight4",
      "highlight5",
      "highlight6",
      "highlight6 center",
      "highlight7 underline",
      "highlight7 cross-corners",
      "highlight7 corners",
      "highlight8 pulse",
      "highlight8 raise",
      "highlight8 offset",
      "highlight9",
      "highlight10",
      "highlight10 lined thick",
      "highlight10 lined thin",
      "highlight10 dotted thick",
      "highlight10 dotted thin",
      "highlight10 dashed thick",
      "highlight10 dashed thin"
    ];
    let links = linkStylesNames.map(linkStyle => (
      <div style={componentStyles}>
        <Example linkStyle={linkStyle} />
      </div>
    ));

    var TwoPartsLinkStylesNames = ["highlight1", "highlight2"];
    let twoPartsLinks = TwoPartsLinkStylesNames.map(linkStyle => (
      <div style={componentStyles}>
        <TwoPartsExample linkStyle={linkStyle} />
      </div>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Awesome React Links</h1>
        </header>
        <center>
          <p>
            To know more about this npm package, checkout the{" "}
            <a
              href="https://github.com/drex44/awesome-react-links"
              target="_new"
            >
              Github repo!
            </a>
          </p>
          <p>
            * Press ctrl + shift + R to clear the caches and get latest version
            of the site!
          </p>
          <p>* Visit the website in computer only</p>
        </center>
        <Information
          title="How to use Parameters?"
          desc="Pass these parameters to change colors. all of these are optional."
        />
        <ParameterExample linkStyle="highlight2" />

        <Information
          title="All styles"
          desc="Look at the code sample to see how to use particular style."
        />
        <div className="App-body">
          {links}
          <center style={{ margin: "2em" }}>
            <h3>Experimental (do not use in production)</h3>
          </center>
          {twoPartsLinks}
        </div>
      </div>
    );
  }
}

export default App;
