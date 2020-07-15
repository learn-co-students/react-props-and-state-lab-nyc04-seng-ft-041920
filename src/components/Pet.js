import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petInfo.gender === "female" ? '♀' : '♂'}
              {this.props.petInfo.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petInfo.age} </p>
            <p>Weight: {this.props.petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={this.props.petInfo.isAdopted === true ? 'ui button' : 'disabled ui button'}>Already adopted</button>
          <button className={this.props.petInfo.isAdopted === true ? 'disabled ui button primary' : 'ui primary button'} onClick={() => this.props.onAdoptPet(this.props.petInfo.id)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
