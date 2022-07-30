import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";
import Points from "./Points/Points";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="site">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Rate} />
            <Route exact path="/about" component={About} />
            <Route exact path="/points" component={Points} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
