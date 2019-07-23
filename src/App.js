import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Container from "./components/Container";
import champs from "./champions.json";

class App extends Component {

  state = {
    champs
  };

  render() {
    return (
      <Router>
        <div>
            {/* <Navbar /> */}
          {/* <Container> */}
          <Jumbotron />
          {/* </Container> */}
          <Container>
            {this.state.champs.map(champ => (
              <Card
                id={champ.id}
                key={champ.id}
                name={champ.name}
                image={champ.image}
              />
            ))}
          </Container>
          {/* <Container>
            <Footer />
          </Container> */}
        </div>
      </Router>
    );
  }
}

export default App;
