import React from 'react';
import SimpleRating from './rating';
function MovieCard(props) {
    
    return (
        <div>
        {props.list.filter(el=>el.MovName.toUpperCase().includes(props.Keyword.toUpperCase())).map(el=>
            <div >
            <h1>{el.MovName}</h1>
             {/* rating */}
            <SimpleRating valeur={el.Rating} />
            {/* end rating */}
            <p>{el.description}</p>
            <img src={el.imgUrl} alt=""/>
        </div>
        
            )}
        </div>
    )
}
export default MovieCard

