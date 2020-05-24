import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {

        return (
            <header className="s-header">
                <nav className="header-nav">
                    <a href="#0" className="header-nav__close" title="close"></a>
                    <div className="header-nav__content">
                        <h3>Guilherme Golfetto</h3>

                        <ul className="header-nav__list">
                            <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
                            <li><a className="smoothscroll" href="#about" title="about">Sobre</a></li>
                            <li><a className="smoothscroll" href="#services" title="services">Conhecimentos</a></li>
                            <li><a className="smoothscroll" href="#works" title="works">Maluquices</a></li>
                            <li><a className="smoothscroll" href="#contact" title="contact">Contato</a></li>
                        </ul>

                        <p>As pessoas que são loucas o suficiente para achar que podem mudar o mundo são aquelas que o mudam.</p>
                        <p>Steve Jobs</p>

                        <ul className="header-nav__social">
                            <li>
                                <a href={this.state.urlFacebook} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                            </li>
                            
                            <li>
                                <a href={this.state.urlInstagram} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href={this.state.urlGithub} target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                            </li>

                        </ul>
                    </div>
                </nav>
                
                <a className="header-menu-toggle" href="#0">
                    <span className="header-menu-icon"></span>
                </a>
            </header>
        );
    }
}

export default Header;