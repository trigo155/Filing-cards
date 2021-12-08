import React from 'react'
import { Icoment, USERCOMENTS } from '../../types';


const Card = ({props}:{props:USERCOMENTS[]}) => {

    
    
    
    return (
        <div>
           {props.length &&
           props.map((coment, index) => {
            return (
                <div key={index}>
                    <h1>userId</h1>
                    {coment.userId}
                </div>
            )

           })} 
           
        </div>
    )
}

export default Card
