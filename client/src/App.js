import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Hero />
            {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/login" component={Login} />
            {/* <Route exact path="/search" component={Search} /> */}
          <Section />
          <Footer />
      </div>
    </Router>
  );
}

export default App;

          
      




