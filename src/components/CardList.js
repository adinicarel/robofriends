import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <section>
            {
                robots.map((user,i) => {
                    return (
                        <Card 
                        key={robots[i].id}
                        id={robots[i].id+20}
                        name={robots[i].name}
                        email={robots[i].email}
                        />
                    );
                })
            }
        </section>
    );
}

export default CardList;