import React, { Component } from 'react'
import Tables from './Table'
import Form from './Form'
import Api from './api';

class App extends Component {
    //function = método para remover caracters.
    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    };

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    };

    state = {
        characters: [],
    };

    render() {
        const name = 'Taniaina'
        const heading = <h1>Hello, {name}</h1>
        //As props são utilizadas somente para leituras
        const characters_exemplo_props = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ];



        const { characters } = this.state
        return (
            <div className="container">
                <h1>{heading}</h1>
                <Form handleSubmit={this.handleSubmit}/>
                <Tables characterData={characters} removeCharacter={this.removeCharacter} />
                <Api />
            </div>
        )
    }
};

export default App;