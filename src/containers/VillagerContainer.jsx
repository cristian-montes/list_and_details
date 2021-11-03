import React, { Component } from "react";
import { fetchAVillager } from "../services/AnimalCrossingApi";
import VillagerInfo from '../components/villagers/VillagerInfo';


class VillagerContainer extends Component {
    state ={
        loading: true,
        villager: "",
    }

    async componentDidMount(){
        const {id} = this.props.match.params;

        const villager = await fetchAVillager(id);

        this.setState({
            villager,
            loading:false
        });
    }

    render() {
        const { loading, villager } = this.state;
        console.log('HEHEHRHEHREH', villager)
        if(loading){
            return <h1>Loooaddinggg......</h1>
        }

        return <VillagerInfo villager = { villager }/>
    }

    
}

export default VillagerContainer;