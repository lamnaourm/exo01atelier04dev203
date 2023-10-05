import React, { Component } from 'react'
import Valeur from './Valeur';

export default class Compteur extends Component {

    state = {
        compteur: 0,
        pasi:1,
        pasd:1
    }
    incrementer = (e) => {
        e.preventDefault();

        this.setState({ compteur: this.state.compteur + this.state.pasi })
    }

    decrementer = (e) => {
        e.preventDefault();
        this.setState({ compteur: this.state.compteur - this.state.pasd })

    }

    initialiser = (e) => {
        e.preventDefault();
        this.setState({ compteur: 0 })

    }
    render() {
        return (
            <div>
                <Valeur val={this.state.compteur} />
                <button onClick={this.incrementer}>incrementer</button>
                <button onClick={this.decrementer}>decrementer</button>
                <button onClick={this.initialiser} disabled={this.state.compteur===0}>initialiser</button>

                <fieldset>
                    <legend>Pas d'incrementation</legend>
                    <button type="button" onClick={() => this.setState({pasi:1})} disabled={this.state.pasi===1}>1</button>
                    <button type="button" onClick={() => this.setState({pasi:2})} disabled={this.state.pasi===2}>2</button>
                    <button type="button" onClick={() => this.setState({pasi:3})} disabled={this.state.pasi===3}>3</button>
                    <button type="button" onClick={() => this.setState({pasi:4})} disabled={this.state.pasi===4}>4</button>
                </fieldset>

                <fieldset>
                    <legend>Pas de decrementation</legend>
                    <button type="button" onClick={() => this.setState({pasd:1})} disabled={this.state.pasd===1}>1</button>
                    <button type="button" onClick={() => this.setState({pasd:2})} disabled={this.state.pasd===2}>2</button>
                    <button type="button" onClick={() => this.setState({pasd:3})} disabled={this.state.pasd===3}>3</button>
                    <button type="button" onClick={() => this.setState({pasd:4})} disabled={this.state.pasd===4}>4</button>
                </fieldset>
            </div>

            

        )
    }
}
