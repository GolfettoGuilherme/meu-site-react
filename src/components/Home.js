import React, { Component } from 'react';

class Home extends Component {

    render() {
        
        const {urlFacebook ,urlInstagram, urlGithub} = this.props.dados;
        
        return (
            <section
                id="home"
                className="s-home target-section"
                data-parallax="scroll"
                data-image-src="images/bg-matrix.jpg"
                data-natural-width="3000"
                data-natural-height="2000"
                data-position-y="center">

                <div className="overlay"></div>
                <div className="shadow-overlay"></div>

                <div className="home-content">
                    <div className="row home-content__main">
                        <h3>Guilherme Golfetto</h3>
                        <h1 className="maquina-escrever">
                            Um jovem que sonha ser o melhor <br />
                                hacker do mundo...na humildade, claro.
                        </h1>
                        <div className="home-content__buttons">
                            <a href="#contact" className="smoothscroll btn btn--stroke">CONTATO</a>
                            <a href="#about" className="smoothscroll btn btn--stroke">QUEM É VOCÊ?</a>
                        </div>
                    </div>
                </div>

                <ul className="home-social">
                    <li>
                        <a href={urlFacebook} target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span>
                        </a>
                    </li>
                    
                    <li>
                        <a href={urlInstagram}  target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href={urlGithub}  target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i><span>Github</span>
                        </a>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Home;