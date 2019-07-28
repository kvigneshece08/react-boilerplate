import React, { Component } from "react";
import PokemonList from './PokemonList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "1",
      pokemonList: []
    };
  }

  onSelectTypeChange(event) {
    this.setState({type: event.target.value})
  }

  onClickButton(event) {
    event.preventDefault();
    const API_URL = `https://pokeapi.co/api/v2/type/${this.state.type}/`;
    fetch(API_URL).then(result => {        
        return result.json()
    }).then(res => {
        this.setState({pokemonList: res.pokemon});
    }).catch(err => {
        console.log(err, "error");
    })
  }

  render() {
    return (
      <div className="container app-container">
        <div>
          <h4>Pokemon Application</h4>
          <form>
            <label>choose your pokemon type</label><br/>
            <select onChange={this.onSelectTypeChange.bind(this)}>
              <option value="1">normal</option>
              <option value="2">flying</option>
              <option value="3">fighting</option>
              <option value="4">poison</option>
            </select><br/>
            <button onClick={this.onClickButton.bind(this)} className="btn btn-success">search for type</button>
          </form>
        </div>
        <PokemonList pokemonResult={this.state.pokemonList}></PokemonList>
      </div>
    );
  }
}

export default App;


// export const App = () => {
//     return (
//         <div>Welcome to Functional component!!!!</div>
//     );
// }

// export default App;

// class App extends Component {
//     render() {
//         return (
//             <div>Welcome to Class Based component!!!!</div>
//         )
//     }
// }
