import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  };

  render() {

    // This line is equivalent to the following:
    /*
      const monsters = this.state.monsters;
      const searchField = this.state.monsters
    */
    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <div className="App">

          <h1>Monsters Rolodex</h1>


          {/* Here we are passing the props are de structured and we are receiving them as de structured in the
              functional component SearchBox */}
          <SearchBox
            placeholder='Search Monsters'
            handleChange={this.handleChange}
          />

          <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

export default App;
