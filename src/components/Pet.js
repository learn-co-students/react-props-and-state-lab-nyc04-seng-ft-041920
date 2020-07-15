import React from 'react'

class Pet extends React.Component {
  render() {
    const {name, age, weight, id, gender, type, isAdopted} = this.props.petDetails
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? '♀' : '♂'}
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
          <button className={isAdopted === true ? "ui button" : "ui disabled button"}>Already adopted</button>
          <button onClick={() => this.props.onAdoptPet(id)} className={isAdopted === true ? "ui disabled button" : "ui primary button"}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
