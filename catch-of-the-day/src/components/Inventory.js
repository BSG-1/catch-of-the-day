import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        const fish = this.props.fishes[key];
        // console.log(fish);
        //take a copy of that fish and update it with the new data
        //console.log(e.target.name, e.target.value) <-- what this does is capture the actual element(in this case "name"), value (the new value you're putting there)
        const updatedFish = {
            ...fish,
            //computed property
            [e.target.name]: e.target.value
        }
        this.props.updateFish(key, updatedFish);
        // next step is to take this updatedFish and pass to the App component which actually renders the fish name/value
        // console.log(updatedFish)

    }

    // inventory controller
    renderInventory(key) {
        //actually need the info about the fishes
        const fish = this.props.fishes[key];

        return (
            <div className="fish-edit" key={key}>
                <input type="text" name="name" value={fish.name} placeholder="Fish name" onChange={(e) => this.handleChange(e, key)}/>
                <input type="text" name="price" value={fish.price} placeholder="Fish price"/>
                <select type="text" name="status" value={fish.status} placeholder="Fish status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" name="desc" value={fish.desc} placeholder="Fish desc"></textarea>
                <input type="text" name="image" value={fish.image} placeholder="Fish Image"/>
            </div>
        )
    }
    render(){
        return(
            <div>
                <h2>Inventory</h2>
                {/* inventory controller */}
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>   
        )
    }
}

export default Inventory;