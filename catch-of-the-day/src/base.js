//firebase connection setup
import Rebase from 're-base';

const base = Rebase.createClass({
    //api key
    //domain connecting to
    //route 
    apiKey: "AIzaSyA7S8-RYHgnYGASfa8lPXIMx2BVJcL6Q9k",
    authDomain: "catch-of-the-day-bsg.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-bsg.firebaseio.com",
});

//export the connection to other files
export default base;