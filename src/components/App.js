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

  fetchPet = () => {
    const type = this.state.filters.type
    let baseUrl = "/api/pets"
  
    if (type !== "all") {
      baseUrl += `?type=${type}`
    }

    // fetch pets
    fetch(baseUrl)
    .then(r => r.json())
    .then(myPets => {
      this.setState({
        pets: myPets
      })
    })
  }

  handlePickType = (value) => {
    this.setState({
      filters: {type: value}
    })
  }

  handleisAdoptedAttribute = (petId) => {

    const allPets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })

    this.setState({
      pets: allPets
    }) 
  }

  render() {
    console.log("App: ", this.state)
    console.log("====================")
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handlePickType} onFindPetsClick={this.fetchPet} />
            </div>
            <div className="twelve wide column">
              <PetBrowser myPets={this.state.pets} onAdoptPet={this.handleisAdoptedAttribute} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App