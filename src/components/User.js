import React, {Component} from 'react';
import firestore from '../firebase/Firestore';

class User extends Component {
    
    addUser = e => {
        const db = firestore.firestore();
        db.collection("users").add({
            firstName: 'Walter',
            lastName: 'White',
            email: 'example1@example.com',
            events: ['event1']
        })
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.addUser}>Add User</button>
            </div>
         );
    }
}
 
export default User;