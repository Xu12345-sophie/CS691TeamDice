import React, {Component} from 'react';
import fire from '../config/Fire';

class Home extends Component {

    logout = () => {
        fire.auth().signOut();
    }
    render(){
        return(
            <div>
                <h1>Home page</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Home;