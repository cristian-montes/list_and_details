import React, { } from 'react';

const VillagerInfo = ({villager}) => (

    <div>
        <img src={villager.image} alt={villager.name} />
        <figcaption>
            <p>{villager.name}</p>
            <p>{villager.japaneseName}</p> 
            <p>{villager.quote}</p>
            <p>{villager.gender}</p>
            <p>{villager.personality}</p> 
            <p>{villager.species}</p> 
            <p>{villager.birthday}</p> 
            <p>{villager.phrase}</p> 
            <p>{villager.skill}</p> 
            <p>{villager.goal}</p> 
            <p>coffee: {villager.coffee.sugar}, {villager.coffee.roast}, {villager.coffee.milk}</p>
        </figcaption>
    </div>
)
    


export default VillagerInfo;


// const VillagerInfo = ({_id,name, japaneseName,image,quote,gender,personality,species,birthday,phrase,skill ,goal}) => (

