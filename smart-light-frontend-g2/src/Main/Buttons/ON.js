import React, {Component} from 'react';
import Calls from "../Service/Calls";

class ONbutton extends Component {
    render() {
        function click(){

            Calls.accendi(1);
            Calls.status(1,function (body) {});

        }
        return (
            <button onClick={click} style={{
            margin: '15px',
                borderRadius: '15px',
                padding: '10px',
                outline: 'none'
        }}>
        ON
        </button>
    );
    }
}

export default ONbutton;
