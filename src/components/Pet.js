import React from 'react'

class Pet extends React.Component {
  handleClick = () =>{
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    let {pet} = this.props
    const button = pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={this.handleClick} className="ui primary button">Adopt pet</button>
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === "female" ? '♀' : '♂'} {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
          {/* <button className={pet.isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
          <button className={!pet.isAdopted ? "ui primary button" : "ui disabled button"}>Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet
