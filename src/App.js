import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Home from "./home";
import About from "./about";
import Project from "./project";
import Contact from "./contact";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      opening: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Clicked");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ opening: false });
    }, 2000);
  }

  render() {
    if (this.state.opening) {
      return <div className="opening">Chau Kwun Wai</div>;
    }

    return (
      <div>
        <Header handleClick={this.handleClick} />
        <div className="main">
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
