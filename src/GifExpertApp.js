import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories=['gatos'] }) => {
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <div className="jumbotron">
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories}/>
                <hr/>
            </div> 
            <div className="container">    
                {   
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </div>
        </>
    );
}


