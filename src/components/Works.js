import React, { Component } from 'react';

class Works extends Component {

    render() {
        return (
            <section id='works' className="s-works">

                <div className="intro-wrap">
                    <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                        <div className="col-full">
                            <h3 className="display-2 display-2--light">Um pouco das minhas maluquices</h3>
                        </div>
                    </div>
                </div>

                <div className="row works-content">
                    <div className="col-full masonry-wrap">
                        <div className="masonry">

                            <div className="masonry__brick" data-aos="fade-up">
                                <div className="item-folio">

                                    <div className="item-folio__thumb">
                                        <a href="/ProTyper/Index" className="thumb-link" title="Shutterbug" data-size="1050x700">
                                            <img src="images/portfolio/pro-typer-home.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="item-folio__text">
                                        <h3 className="item-folio__title">
                                            Pro Typer
                                    </h3>
                                        <p className="item-folio__cat">
                                            Projeto em JQuery para testar a sua velocidade de escrita
                                    </p>
                                    </div>

                                    <a href="/ProTyper/Index" className="item-folio__project-link" title="Project link">
                                        <i className="icon-link"></i>
                                    </a>

                                    <div className="item-folio__caption">
                                        <p>Eu acho que esse texto não está aparecendo pra ninguem .</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Works;