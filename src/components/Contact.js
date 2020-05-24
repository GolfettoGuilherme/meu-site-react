import React, { Component } from 'react';


class Contact extends Component {

    render() {
        return (
            <section id="contact" className="s-contact">

                <div className="overlay"></div>
                <div className="contact__line"></div>

                <div className="row section-header" data-aos="fade-up">
                    <div className="col-full">
                        <h1 className="subhead">Me chama para um novo projeto ou maluquices, ou apenas para dizer oi ;)</h1>
                    </div>
                </div>

                <div className="row contact-content" data-aos="fade-up">

                    <div className="contact-primary">

                        <h3 className="h6">Preencha o formulario para bla.bla.bla</h3>

                        <form name="contactForm" id="contactForm" method="post" action="" novalidate="novalidate">
                            <fieldset>

                                <div className="form-field">
                                    <input 
                                        name="contactName" 
                                        type="text" 
                                        id="contactName" 
                                        placeholder="Nome"          
                                        minlength="2" 
                                        aria-required="true" 
                                        className="full-width" />
                                </div>
                                <div className="form-field">
                                    <input 
                                        name="contactEmail" 
                                        type="email" 
                                        id="contactEmail" 
                                        placeholder="E-mail" 
                                        aria-required="true" 
                                        className="full-width" />
                                </div>
                                <div className="form-field">
                                    <input 
                                        name="contactSubject" 
                                        type="text" 
                                        id="contactSubject" 
                                        placeholder="Assunto" 
                                        className="full-width" />
                                </div>
                                <div className="form-field">
                                    <textarea name="contactMessage" id="contactMessage" placeholder="Mensagem...capricha, vai." rows="10" cols="50" required="" aria-required="true" className="full-width"></textarea>
                                </div>
                                <div className="form-field">
                                    <button className="full-width btn--primary">Enviar</button>
                                    <div className="submit-loader">
                                        <div className="text-loader">Enviando...</div>
                                        <div className="s-loader">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                        </form>


                        <div className="message-warning">
                            Deu ruim em alguma coisa, vamos tentar de novo?
                        </div>


                        <div className="message-success">
                            Sua mensagem foi enviada, é nois !<br />
                        </div>

                    </div>

                    <div className="contact-secondary">
                        <div className="contact-info">

                            <h3 className="h6 hide-on-fullwidth">Informações de Contato</h3>

                            <div className="cinfo">
                                <h5>Aonde me encontrar</h5>
                                <p>
                                    Telefone: (+55) 11 9 4877 6060<br />
                                </p>
                            </div>


                            <div className="cinfo">
                                <h5>Me manda um e-mail</h5>
                                <p>
                                    golfetto.guilherme@gmail.com<br />
                                    guilherme@golfetto.com
                                </p>
                            </div>


                            <ul className="contact-social">
                                <li>
                                    <a href="@Model.FacebookLink"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="@Model.TwitterLink"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="@Model.InstagramLink"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="@Model.GithubLink"><i className="fa fa-github" aria-hidden="true"></i></a>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>

            </section>
        );
    }
}

export default Contact;