import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/app.scss";

import Imprint from "./components/Imprint";
import FAQ from "./components/Faq";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const contentful = require("contentful");
const config = {
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  api: process.env.REACT_APP_CONTENTFUL_API_KEY
}

const client = contentful.createClient({
  space: config.space,
  accessToken: config.api
});

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Navbar />

          <Switch className="content">
            <Route exact path="/" component={Home} />

            <Route
              exact
              path="/imprint/de"
              render={props => <Imprint contentful={client} locale="de-DE" />}
            />

            <Route
              exact
              path="/imprint/en"
              render={props => <Imprint contentful={client} locale="en-GB" />}
            />

            <Route
              exact
              path="/faq/de"
              render={props => <FAQ contentful={client} locale="de-DE" />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
