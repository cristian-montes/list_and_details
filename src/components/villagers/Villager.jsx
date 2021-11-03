import React from 'react';
import { Link } from 'react-router-dom';

const Villager = ({ id, name, image, species }) => (

    <figure>
        <img src={image} alt={name} />
        <figcaption>
            <p>{name}</p>
            <p>{species}</p>

            <Link to={`/villager/${id}`}>
                <button>Click here for More Info</button>
            </Link>
        </figcaption>
    </figure>
);

export default Villager;