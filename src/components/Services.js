import React, { Component } from 'react';

class Services extends Component {

    render() {
        return (
            <section id='services' className="s-services">

                <div className="row section-header has-bottom-sep" data-aos="fade-up">
                    <div className="col-full">
                        <h2 className="display-2">Tentando mudar o mundo, procurando o código fonte na página</h2>
                    </div>
                </div>

                <div className="row services-list block-1-2 block-tab-full">

                    <div className="col-block service-item" data-aos="fade-up">
                        <div className="service-icon">
                            <i className="icon-paint-brush"></i>
                        </div>
                        <div className="service-text">
                            <h3 className="h2">C# .NET</h3>
                            <p>Linguagem principal (do momento).
                            Trabalho com .NET desde de 2015, já vi desde Windows Forms, ASP .NET MVC, Azure Functions (que é uma parada sensacional !) e agora ASP Core que eu adoro.
                    </p>
                        </div>
                    </div>

                    <div className="col-block service-item" data-aos="fade-up">
                        <div className="service-icon">
                            <i className="icon-group"></i>
                        </div>
                        <div className="service-text">
                            <h3 className="h2">JavaScript</h3>
                            <p>Não só pelo hype, a linguagem é boa mesmo mano.
                            Aprendi a fazer muita coisa, relatórios dinamicos, jogos, gráficos, tabelas, mapas, as vezes tudo junto e misturado.
                            Essa maluquice toda aqui roda em uma tonelada de JavaScript, eu adoro essa bangunça.
                    </p>
                        </div>
                    </div>

                    <div className="col-block service-item" data-aos="fade-up">
                        <div className="service-icon">
                            <i className="icon-megaphone"></i>
                        </div>
                        <div className="service-text">
                            <h3 className="h2">SQL</h3>
                            <p>
                                O que? um programador que gosta de SQL.
                                Então... é uma das coisas que a gente aprende para passar na faculdade, mas depois que trabalha com isso, nunca mais esquece.
                                Eu até me divirto criando procedures malucas.
                                WITH(NOLOCK) neles.
                            </p>
                        </div>
                    </div>

                    <div className="col-block service-item" data-aos="fade-up">
                        <div className="service-icon">
                            <i className="icon-earth"></i>
                        </div>
                        <div className="service-text">
                            <h3 className="h2">Web Design</h3>
                            <p>
                                Aqui tem aquele pacotão de HTML, CSS (eu ja falei de Javascript?).
                                Não vou falar que crio layouts super elaborados com UX mothafocka.
                                Aprendemos para não passar vergonha né?.
                            </p>
                        </div>
                    </div>

                    <div className="col-block service-item" data-aos="fade-up">
                        <div className="service-icon">
                            <i className="icon-cube"></i>
                        </div>
                        <div className="service-text">
                            <h3 className="h2">Entity Framework</h3>
                            <p>
                                As vezes o SQL cansa né?.
                                Mas se formos espertinhos, da pra subir um projeto legal, robusto e nem usar SQL, malandramente.
                                Nem tudo são rosas, admito, tem migration minha que parece uma cebola, da vontade de chorar, mas estamos aprendendo todos os dia a passar menos vergonha nisso.
                            </p>
                        </div>
                    </div>

                    <div className="col-block service-item" data-aos="fade-up">
                        <div className="service-icon"><i className="icon-lego-block"></i></div>
                        <div className="service-text">
                            <h3 className="h2">Python</h3>
                            <p>
                                Aquele brinquedo que toda criança gosta.
                                Hoje o meu uso é mais prático: fazer coisas que eu não quero fazer, tipo procurar coisas em texto, renomear arquivos.
                                Meu uso do python é trabalhar na base de preguiça de movimentos repetitivos.
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}

export default Services;