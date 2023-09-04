import React from 'react';
import Avatar from './Avatar';


function Card(props){
    return <div>
        <div className="card">
            <div className="top">
                <p>{props.id}</p>
                <h2>{props.name}</h2>
                <Avatar img={props.img} />
            </div>
            <div className="bottom">
                <p>{props.tagline}</p>
                <p>{props.description}</p>
            </div>
        </div>
        
    </div>;
}

export default Card;