import React, {Component} from 'react';
import Grafico from '../../Main/Grafico/Grafico';

class ColonnaDue extends Component {
    render() {
        return (
            <div>
                <Grafico/>
                <div style={{
                    border:'solid',
                    borderColor:'#ff2627',
                    width:'300px',
                    marginTop:'50px',
                    marginLeft:'120px',

                }}>
                    Ciao sono un div, scrivi qualcosa DENTRO DI ME
                </div>
            </div>
        );
    }
}

export default ColonnaDue;
