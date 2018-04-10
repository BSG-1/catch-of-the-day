import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';


class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        //initial state with nothing in it
        this.state = {
            fishes: {},
            order: {}
        }
    }

    //React lifecycle method
    componentWillMount() {
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish(fish) {
        //update our state
        const fishes = {...this.state.fishes}
        //add in our new fish using timestamp for a key
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //set the new state
        this.setState({fishes})
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder(key) {
        //takes copy of state
        const order = {...this.state.order};
        //updates or adds new fish to orde
        order[key] = order[key] + 1 || 1;
        //update our new state
        this.setState({ order });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="list-of-fishes">
                        { Object
                            .keys(this.state.fishes)
                            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
                        }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;