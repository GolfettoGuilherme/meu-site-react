import React, { Fragment, Component } from 'react';

import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Works from './components/Works.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

class App extends Component {

  state = {
    dados : {
      urlFacebook : 'https://www.facebook.com/golfetto.guilherme',
      urlInstagram : 'https://www.instagram.com/guigolfetto/',
      urlGithub : 'https://github.com/GolfettoGuilherme',
      email : 'golfetto.guilherme@gmail.com',
      idade : 26
    }
  };

  render(){
    return (
      <Fragment>
        <Home dados = {this.state.dados}/>
        <About urlGithub = {this.state.dados.urlGithub} />
        <Services />
        <Works />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
  
}

export default App;
