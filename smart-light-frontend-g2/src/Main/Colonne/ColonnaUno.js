import React, {Component} from 'react';
import OFFbutton from '../Buttons/OFF';
import ONbutton from '../Buttons/ON';
import Lampadina from '../Lampadina/Lampadina';

class ColonnaUno extends Component {
    render() {
        return (
            <table style={{
                width:'90%',
                height:'100%',
                border:'solid black',
                margin: '15px',
                borderRadius: '15px',
                padding: '10px',
                outline: 'none'
        }}>

        <tr><td rowspan="2"><Lampadina/></td><td><ONbutton/></td></tr>
        <tr><td><OFFbutton/></td></tr>

    </table>
    );
    }
}

export default ColonnaUno;
