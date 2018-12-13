import React, {Component} from 'react';
import Grafico from '../../Main/Grafico/Grafico';
import App from '../../App.css';
import SwitchButton from '../Buttons/Switch';
import SwitchStyle from '../Buttons/SwitchStyle.css'

var defaultColorB1;
var defaultColorB2;



class ColonnaDue extends Component {

    constructor(){
        super();
        defaultColorB1 = 'Selected';
        defaultColorB2 = 'Standard';


    }

    setState(backend) {




        if(backend == 1){
            defaultColorB1 =  'Selected';
            defaultColorB2 =  'Standard';
        } else {
            console.log("ciao");
            defaultColorB1 =  'Selected';
            defaultColorB2 =  'Standard';
        }
    }

    render() {



        return (
            <div>
                <Grafico/>
                <div style={{
                    width: '300px',
                    marginLeft: '250px',

                }}>
                    <div style={{float:'left', fontSize:'25px'}}>BackEnd 1</div>
                    <SwitchButton

                    onClick={()=>{
                        console.log('ciaooone');
                    }}/>
                    <div style={{float:'right', fontSize:'25px'}}>BackEnd 2</div>
                </div>
            </div>
        );
    }
}

export default ColonnaDue;
