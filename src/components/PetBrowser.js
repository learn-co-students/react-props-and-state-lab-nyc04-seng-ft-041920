import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  displayPets = (petsArray) => {
    return petsArray.map(pet => {
      return <Pet petDetails={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    })
  }

  render() {
    return <div className="ui cards">
      {this.displayPets(this.props.pets)}
    </div>
  }
}

export default PetBrowser
