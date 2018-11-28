import React, {Component} from 'react';
import lampON_1 from '../Resources/lamp_on_1.png';
import lampON_2 from '../Resources/lamp_on_2.png';
import lampON_3 from '../Resources/lamp_on_3.png';
import lampOFF_1 from '../Resources/lamp_off_1.png';
import lampOFF_2 from '../Resources/lamp_off_2.png';
import lampOFF_3 from '../Resources/lamp_off_3.png';
import wallOff from "../Resources/wallOFF.jpg";


var image = lampOFF_1;



class Lampadina extends Component {

    constructor(props) {
        super(props);
        this.stato = false;
    }
    
    componentDidMount() {
        var lampON = [ lampOFF_1, lampOFF_2, lampOFF_3];
        var lampOFF = [ lampON_1, lampON_2, lampON_3];
        var imageNumber = 0;

         this.change = () => {
            if (!this.stato){
                image = lampON[imageNumber++];
            } else {
                image = lampOFF[imageNumber++];
            }

            console.log(this.stato);

            if (imageNumber == lampOFF.length) {
                imageNumber = 0;
            }
            this.setState({ time: Date.now() });
        };

        this.interval = setInterval(this.change, 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    changeState(){
        this.stato = !this.stato;
        this.change();
    }

    render() {


        return (
            <div>
            <img onClick={()=> this.changeState()} style={{width:'90%'}} src={image}></img>
            lampadina</div>
    );
    }
}

export default Lampadina;
