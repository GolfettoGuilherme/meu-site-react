import React, { Component } from 'react';
import api from '../services/githubApi.js';

class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            idade: this.calcularIdade(),
            contadorCafe: this.calcularCafe(),
            urlGithub: this.props.urlGithub
        };
    }

    calcularIdade() {
        let anoAtual = new Date().getFullYear();
        return anoAtual - 1994;
    }

    calcularCafe() {
        return Math.floor((Math.random() * 10000) + 1);
    }

    componentDidMount() {
        api.get('/users/GolfettoGuilherme/repos?per_page=100')
            .then(res => {
                let contagem = res.data.length;
                this.setState({contadorReps: contagem});
            });
    }

    render() {
        return (
            <section id='about' className="s-about">

                <div className="row section-header has-bottom-sep" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="display-1 display-1--light">Essa fera bicho</h3>
                    </div>
                </div>

                <div className="row about-desc" data-aos="fade-up">
                    <div className="col-full">
                        <p>
                            {this.state.idade} anos. Tentando aprender coisas novas, passar menos vergonha e vivendo a base de café todos os dias (uteis). Vivendo na incerteza, na loucura e encarando desafios todos os dias (úteis e não úteis). Da uma olhada nos meus números
                        </p>
                    </div>
                </div>

                <div className="row about-stats stats block-1-4 block-m-1-2 block-mob-full" data-aos="fade-up">
                    <div className="col-block stats__col ">
                        <div className="stats__count">{this.state.contadorReps}</div>
                        <h5>Repositórios <a href={this.state.urlGithub}>GitHub</a></h5>
                    </div>
                    <div className="col-block stats__col">
                        <div className="stats__count">{this.state.contadorCafe}</div>
                        <h5>
                            Copos de café <br />
                            <small>e contando...</small>
                        </h5>
                    </div>
                    <div className="col-block stats__col">
                        <div className="stats__count">11</div>
                        <h5>Projetos Iniciados</h5>
                    </div>
                    <div className="col-block stats__col">
                        <div className="stats__count">4</div>
                        <h5>Projetos Terminados</h5>
                    </div>
                </div>
                <div className="about__line"></div>
            </section>
        );
    }
}

export default About;