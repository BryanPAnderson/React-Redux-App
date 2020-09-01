import React from 'react';
import {connect} from 'react-redux';

const CharacterCard = props => {
    return(
        <div>
            <h2>{props.name}</h2>
            <h3>{props.status}{props.species}</h3>
            <p>Last known location:{props.location}</p>
            <p>First seen in:{props.episode}</p>

        </div>
    )
}
export default CharacterCard;