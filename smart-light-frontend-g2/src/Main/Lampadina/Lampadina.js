import React, {Component} from 'react';
import lampON_1 from '../Resources/lamp_on_1.png';
import lampON_2 from '../Resources/lamp_on_2.png';
import lampON_3 from '../Resources/lamp_on_3.png';
import lampOFF_1 from '../Resources/lamp_off_1.png';
import lampOFF_2 from '../Resources/lamp_off_2.png';
import lampOFF_3 from '../Resources/lamp_off_3.png';
import lampER1 from '../img/ER1.png';
import lampER2 from '../img/ER2.png';
import lampOFF0 from '../img/OFF.png';
import lampON1 from '../img/ON1.png';
import lampON2 from '../img/ON2.png';
import sfondoLuceER from '../img/sfondoLuceER.jpg';
import sfondoLuceOFF from '../img/sfondoLuceOFF.jpg';
import sfondoLuceON from '../img/sfondoLuceON.jpg';
import wallOff from "../Resources/wallOFF.jpg";
import Calls from "../Service/Calls";

var image = lampOFF_1;
var sfondo = sfondoLuceON;

class Lampadina extends Component {

    constructor(props) {
        super(props);
        this.stato = false;
    }
    
    componentDidMount() {
        var lampOFF = [ lampOFF0 , lampOFF0];
        var lampON = [ lampON1, lampON2];
        var lampERR = [ lampER1, lampER2];

        var imageNumber = 0;

         this.change = () => {
             Calls.status(1,function (response) {
                 var stato = response.stato;


                 if (stato){
                    // sfondo = sfondoLuceOFF;
                     image = lampON[imageNumber++];

                 } else {
                    // sfondo = sfondoLuceOFF;
                     image = lampOFF[imageNumber++];

                 }

             });


            if (imageNumber >= lampOFF.length) {
                imageNumber = 0;
            }
            this.setState({ time: Date.now() });
        };

        this.interval = setInterval(this.change, 150);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    changeState(){

        Calls.status(1,function (response) {
           // console.log(response.stato);

            if (!response.stato){
                Calls.azione(1,{
                    id: '01',
                    action: 'accendi'
                });
            }else {
                Calls.azione(1,{
                    id: '01',
                    action: 'spegni'
                });
            }
        });

        this.change();
    }

    render() {


        return (
            <table>
                <img onClick={()=> this.changeState()} style={{width:'90%', marginLeft:'150px'}} src={image}></img>
            </table>
    );
    }
}

export default Lampadina;