import React from 'react'
import PropTypes from 'prop-types';

export const Cancion = ({ letra }) => {

    if( letra.length === 0 ) return null;

    return(
        <>
            <h2>Letra Canción</h2>
            <p className="letra">{ letra }</p>
        </>
    );

};

Cancion.propTypes = {
    letra: PropTypes.string.isRequired
}