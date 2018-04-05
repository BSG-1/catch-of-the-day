import React from 'react';
import { getFunName } from '../helpers';

{/*Storpicker component*/}
class StorePicker extends React.Component {
    //constructor which allows goToStore to actually BIND to StorePicker
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(event) {
        event.preventDefault();
        //first grab the text from the box
        console.log('You changed the URL');
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`)
        //second we're going to transition from / to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`)
    }

    render(){
        return(
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                {/*Adding a form*/}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object 
}

export default StorePicker;
