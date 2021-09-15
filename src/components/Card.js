import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <article className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/set_set4/${id}?size=200x200`} alt="photo_robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </article>
    );

}

export default Card;