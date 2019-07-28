import React, {Component} from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
    constructor() {
        super();
    }

    getPokemonList() {
        let counter = 0;
        return this.props.pokemonResult.map(pokemons => {
            return <Pokemon key={counter++} count={counter} url={pokemons.pokemon.url} name={pokemons.pokemon.name}></Pokemon>
        })
    }


    render() {
        if(this.props.pokemonResult.length > 0) {
            return( <ul>
                {this.getPokemonList()}
                
            </ul>)
        } else {
            return <div></div>
        }
        
    }
}

export default PokemonList;