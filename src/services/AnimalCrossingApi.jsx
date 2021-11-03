import React from 'react';

export const fetchVillagers = async () => {

    const res = await fetch('http://ac-vill.herokuapp.com/villagers');
 
    const villagers = await res.json();
    return villagers;
}


export const fetchAVillager =  async (id) => {
    const res =  await fetch(`http://ac-vill.herokuapp.com/villagers/${id}`);

    const aVillager =  await res.json();
    console.log('villager', aVillager);

    return aVillager;
}