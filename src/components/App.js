import React, { Component } from "react";

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

class App extends Component {

    constructor() {
        super();
        this.state = {
            type: "hello react course",
            date: "07/27/2019",
            number: 5,
            arrayList: [],
            anObjectInNested: {
                name: "an object on state"
            }
        };
    }
  render() {
      console.log(this.state);
    return (
      <div className="container app-container">
        <div>
          <h4>Pokemon Application</h4>
          <form>
              <label>choose your pokemon type</label>
            <select>
                <option value="1">normal</option>
                <option value="2">flying</option>
                <option value="3">fighting</option>
            </select>
            <button className="btn btn-success">search for type</button>
              </form>
        </div>
      </div>
    );
  }
}

export default App;
