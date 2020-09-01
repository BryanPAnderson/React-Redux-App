import React from 'react';
import {connect} from 'react-redux';
import {getCharacters} from '../actions/actions';
import CharacterCard from '../components/characterCard';

const CharacterList = props => {
    const fetchCharacters = e => {
        e.preventDefault();
        props.getCharacters();
    };
    return (
        <>
        <h2>Rick And Morty</h2>
        {props.isFetching && <p>Fetching Rick and Morty Characters...</p>}
        <div>
            {props.characters.map(characters => (
                <div classname= 'Ricks' key={characters.url} characters={characters.name}>
                    <CharacterCard/>
                </div>    
            ))}
        </div>
        {props.error && <p className="error">{props.error}</p>}
        <button onClick={fetchCharacters}>Fetch Rick And Morty characters!</button>
        </>
    );
};

const mapStateToProps = state => ({
    characters:state.characters
})

const mapDispatchToProps = {
    getCharacters
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);