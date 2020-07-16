import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  onChangeType = (e) => {
    const inputName = e.target.name;
    this.setState({
      filters: {
        [inputName]: e.target.value,
      },
    });
  };

  onFindPetsClick = (e) => {
    // e.preventDefault();
    let url = "/api/pets";
    if (this.state.filters.type === "all") {
      url = "/api/pets";
    } else if (this.state.filters.type === "cat") {
      url = "/api/pets?type=cat";
    } else if (this.state.filters.type === "dog") {
      url = "/api/pets?type=dog";
    } else if (this.state.filters.type === "micropig") {
      url = "/api/pets?type=micropig";
    }
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({ pets: resp });
        // console.log(this.state);
      });
  };

  onAdoptPet = (id) => {
    // console.log(typeof id);
    let adoptedList = [];
    this.state.pets.forEach((pet) => {
      if (pet.id === id) {
        pet.isAdopted = true;
      }
      adoptedList.push(pet);
    });

    this.setState({ pets: adoptedList });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
