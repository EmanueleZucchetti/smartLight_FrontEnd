import React, {Component} from 'react';
import Lampadina from '../Lampadina/Lampadina';

import wallOff from '../Resources/wallOFF.jpg';


class ColonnaUno extends Component {
    render() {
        return (
            <table style={{

                width:'90%',
                height:'100%',
                margin: '15px',
                padding: '10px',
                outline: 'none'
            }}>
        <tr>
            <td rowspan="2">
                <Lampadina/>
            </td>
            <td>

            </td>
        </tr>
        <tr>
            <td>

            </td>
        </tr>
    </table>
    );
    }
}

export default ColonnaUno;
