import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( { title, url} ) => {
    // console.log( { title, url} );
    // return (
    //     <div className="card animate__animated animate__fadeIn">
    //         <img src={ url } alt={ title} />
    //         <p> { title } </p>
    //     </div>
    // )

    return (
        <div className="card shadow bg-light m-2" style={{width: '18rem'}}>
            <img className="card-img-top" src={url} alt={title}/>
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
        
    );
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


