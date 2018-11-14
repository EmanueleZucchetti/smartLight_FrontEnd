import React, {Component} from 'react';
import injectSheet from 'react-jss';
import ReactFC from '../Main/Grafico/Grafico';
//import ToggleButton from 'react-bootstrap';
import ColonnaUno from "./Colonne/ColonnaUno";
import ColonnaDue from "./Colonne/ColonnaDue";


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
    <div className={classes.Home}>
            <divContainer style={{
                border: 'solid 3px',
                borderColor: '#ff2627',
                width: '55%',
                height: '750px',
                float: 'left'
            }}>
                <ColonnaUno/>
            </divContainer>

            <divContainer style={{
                border: 'solid 3px',
                borderColor: '#ff2627',
                width: '40%',
                height: '750px',
                float: 'right'
            }}>
               <ColonnaDue/>
            </divContainer>
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
