import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
  // destructuring
  const { myPets } = this.props 
  return <div className="ui cards">{

    myPets.map(pet => {
      return <Pet key={pet.id} petData={pet} onAdoptPet={this.props.onAdoptPet} />
    })

  }</div>
  }
}

export default PetBrowser
