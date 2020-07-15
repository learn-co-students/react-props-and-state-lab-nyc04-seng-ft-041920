import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    const {pets, onAdoptPet}= this.props
    console.log('in PetBrowser pets: ',pets,onAdoptPet)
    let petCards = this.props.pets.map(pet => {
      return <Pet pet={pet} onAdoptPet={onAdoptPet} key={pet.id}/>
    })
    
    
    return(
      <div className="ui cards">
        {petCards}
      </div>
    )
  }
}

export default PetBrowser
