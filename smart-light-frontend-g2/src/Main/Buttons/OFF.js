import React, {Component} from 'react';
import Calls from '../../Main/Service/Calls'

class OFFbutton extends Component {
    render() {
        function click(){
         //   Calls.spegni(1);
           // Calls.status(1,function (body) {});

            function f(callback_pippo) {
                var stringa='testoooo';

                callback_pippo(stringa)

            }

            f(function (s) {
                console.log(s);
            });
            f((s)=>{
                console.log(s);
            });

        }
        return (
            <button onClick={click} style={{
            margin: '15px',
                borderRadius: '15px',
                padding: '10px',
                outline: 'none'
        }}>
       OFF
        </button>
    );
    }
}

export default OFFbutton;
