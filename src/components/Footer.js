import React, { Component, Fragment } from 'react';

class Footer extends Component {

    render() {
        return (
            <Fragment >
                <footer>

                    <div className="row footer-main">

                        <div className="col-six tab-full left footer-desc">
                            <p>
                                Guilherme Golfetto é um programador que desenvolveu esse site em seu tempo livre para ocupar a cabeça e treinar as coisas que ele tanto estuda. Seus projetos não possuem ambicões financeiras e estão abertos em seu perfil do github para que todos possam aprender com seus erros. Este site veio provar que é possivel fazer alguma coisa sem fins comerciais, apenas por diversão.
                        </p>
                        </div>

                        <div className="col-six tab-full right footer-subscribe">

                            <h4>Entre em Contato</h4>
                            <p>Deu bastante trabalho fazer esse site, então caso queira entrar em contato comigo para me parabenizar, me criticar ou me fazer uma proposta de negocio milhonária, coloque seu melhor e-mail aqui que eu entrarei em contato assim que possivel.</p>

                            <div className="subscribe-form" id="mc-form">
                                <input type="email" value="" name="EMAIL" className="email" id="mc-email" placeholder="seu melhor e-mail" required="" />
                                <input type="submit" name="subscribe" value="Enviar" id="btn" />
                                <label for="mc-email" className="subscribe-message"></label>
                            </div>

                        </div>

                    </div>

                    <div className="row footer-bottom">

                        <div className="col-twelve">
                            <div className="copyright">
                                <span>© Guilherme Golfetto {new Date().getFullYear()}</span>
                                <span>Todos os direitos reservados, como se alguém se importasse com isso.</span>
                            </div>

                            <div className="go-top">
                                <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon-arrow-up" aria-hidden="true"></i></a>
                            </div>
                        </div>

                    </div>

                </footer>

                <div aria-hidden="true" className="pswp" role="dialog" tabindex="-1">

                    <div className="pswp__bg"></div>
                    <div className="pswp__scroll-wrap">

                        <div className="pswp__container">
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                        </div>

                        <div className="pswp__ui pswp__ui--hidden">
                            <div className="pswp__top-bar">
                                <div className="pswp__counter"></div><button className="pswp__button pswp__button--close" title="Close (Esc)"></button> <button className="pswp__button pswp__button--share" title=
                                    "Share"></button> <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button className="pswp__button pswp__button--zoom" title=
                                        "Zoom in/out"></button>
                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip"></div>
                            </div><button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button className="pswp__button pswp__button--arrow--right" title=
                                "Next (arrow right)"></button>
                            <div className="pswp__caption">
                                <div className="pswp__caption__center"></div>
                            </div>
                        </div>

                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Footer;