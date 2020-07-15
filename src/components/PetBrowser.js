import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.pets.map( pet => {
        return <Pet onAdoptPet={this.props.onAdoptPet} key={pet.id} petInfo={pet}/>
      })}
    </div>
  }
}

export default PetBrowser
