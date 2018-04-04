const { firestore } = require('../fire')
import React, {Component} from 'react'
import Login from './components/Login'
//export default () => '🔥 Ready.'

// Add a new document in collection "cities"
export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Login />
            </div>
        )
    }

}
