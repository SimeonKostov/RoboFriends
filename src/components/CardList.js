import React from 'react';
import Card from './Card';

const CardList=({robots})=>{
    // if(true){
    //     throw new Error('Oops. Something went wrong :/');
    // }

    return (
        <div>
            {
                robots.map((robot, i)=>{
                    return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
                })
            }
        </div>
    )
}

export default CardList;