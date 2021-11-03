import React, { } from 'react';

const VillagerInfo = ({villager}) => (

    <div>
        <img src={villager.image} alt={villager.name} />
        <figcaption>
            <p>Name: {villager.name}</p>
            <p>Japanese Name: {villager.japaneseName}</p> 
            <p>Quote {villager.quote}</p>
            <p>Gender: {villager.gender}</p>
            <p>Personality: {villager.personality}</p> 
            <p>Species: {villager.species}</p> 
            <p>Birthday: {villager.birthday}</p> 
            <p>Phrase: {villager.phrase}</p> 
            <p>Skill: {villager.skill}</p> 
            <p>Goal: {villager.goal}</p> 
            <p>coffee: {villager.coffee.sugar}, {villager.coffee.roast}, {villager.coffee.milk}</p>
        </figcaption>
    </div>
)
    


export default VillagerInfo;


// const VillagerInfo = ({_id,name, japaneseName,image,quote,gender,personality,species,birthday,phrase,skill ,goal}) => (

