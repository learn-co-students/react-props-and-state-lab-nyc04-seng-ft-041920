import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { template } from 'babel-core'

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

  changeType =(type)=> {
    this.setState({
        filters:{
          type: type
        }
    }, ()=>console.log(this.state))
  }

  fetchPet=()=> {
    let url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    console.log(this.state.filters.type)
    fetch(url)
      .then(r => r.json())
      .then(petArray => {
        this.setState({ pets: petArray }, ()=>console.log(this.state))
      })
  }
  
  adoptPet =(id)=>{
    let updatedPet = this.state.pets.map(pet=> {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    
    this.setState({
      pets: updatedPet
    }, ()=>console.log("adopPet : ",this.state))
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPet}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
