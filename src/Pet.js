import React from 'react';
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { id, name, animal, breed, media, location } = this.props;
    let photos = [];
    let hero = "https://via.placeholder.com/300.png/09f/fff";
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    if (photos[0] && photos[0].value) {
      hero = photos[0].value;
    }
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{animal} - {breed} - {location}</h2>
        </div>
      </Link>
    )
  }
}

export default Pet;