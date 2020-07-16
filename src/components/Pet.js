import React from 'react'

class Pet extends React.Component {

  render() {
    // destructuring
    const { name, type, age, weight, isAdopted } = this.props.petData
    const petId = this.props.petData.id
  
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {isAdopted === true ? '♀ ' : '♂ '}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          
          <button className={isAdopted === true ? "ui button primary" : "ui button disabled"}>Already adopted</button>
          {/* if you want pass in an argument for a function inside an onClick event you need to
          have a callback function '() => {}' otherwise it will invoke that function when the
          compoent is called. */}
          <button onClick={() => this.props.onAdoptPet(petId)} className={isAdopted === true ? "ui button disabled" : "ui button primary"}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
