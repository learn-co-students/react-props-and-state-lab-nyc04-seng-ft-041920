import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {console.log(this.props.pets)}
        {this.props.pets.map((pet) => {
          return <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} />;
        })}
      </div>
    );
  }
}

export default PetBrowser;
