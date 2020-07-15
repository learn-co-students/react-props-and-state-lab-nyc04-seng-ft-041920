import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  petType = (type) => {
    this.setState({
      filters: {type: type}
    })
  }

  // fetchAndParse(fetchMeThis = "") {
  //   fetch(`/api/pets${fetchMeThis}`)
  //   .then(r => r.json())
  //   .then(pets => {
  //     this.setState({
  //       pets: pets
  //     })
  //   })
  // }

  // onFindPetsClick = () => {
  //   this.state.filters.type === 'all' ? this.fetchAndParse() : this.fetchAndParse(`?type=${this.state.filters.type}`)
  // }


  onFindPetsClick = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }));
  };


  findPetId = (petId) => {
    const myPets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet }
    )

    this.setState ({
      pets: myPets 
    })
  }

  render() {
    console.log("render state", this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.petType} onFindPetClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.findPetId} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App