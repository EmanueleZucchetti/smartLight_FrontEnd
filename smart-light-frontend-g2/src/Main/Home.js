import React, {Component} from 'react';
import injectSheet from 'react-jss';
import ReactFC from '../Main/Grafico/Grafico';
//import ToggleButton from 'react-bootstrap';
import ColonnaUno from "./Colonne/ColonnaUno";
import ColonnaDue from "./Colonne/ColonnaDue";
import sfondoLuceOFF from '../Main/img/sfondoLuceOFF.jpg'
import Switch from "./Buttons/Switch"

const styles = {
    Home: {
        textAlign: 'center'
    },

    HomeLogo: {
        height: '40vmin'
    },

    HomeHeader: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        color: 'white',
    },
};

const homeComponent = ({classes}) => (
    <div style={{backgroundColor:'#626262', paddingTop:'1px', paddingBottom:'1px'}}>
    <table style={{ backgroundImage: `url(${sfondoLuceOFF})`, paddingRight:'500px', margin:'30px', }}>
    <div className={classes.Home}>
            <divContainer style={{
                width: '55%',
                height: '750px',
                float: 'left'
            }}>
                <ColonnaUno/>
            </divContainer>

            <divContainer style={{
                width: '40%',
                height: '750px',
                float: 'right'
            }}>
               <ColonnaDue/>
            </divContainer>
    </div>
    </table>
    </div>
);

class Home extends Component {
    render() {
        return (
            <homeComponent/>
        );

    }
}

export default injectSheet(styles)(homeComponent);
