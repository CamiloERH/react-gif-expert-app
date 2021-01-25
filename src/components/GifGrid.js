import React  from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs( category );
    return (
        <>
            <h3 className="text-center"> { category }</h3>
            { loading && <p>Loading...</p> }
            <div className="d-flex justify-content-center flex-wrap my-2">
                    { 
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img } 
                        />
                        ))
                    
                    }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
