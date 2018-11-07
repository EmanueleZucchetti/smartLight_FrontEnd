import React, {Component} from 'react';
import logo from '../logo.svg';
import Button from '../Main/Buttons/Button';
import injectSheet from 'react-jss';
import {Grid, Col, Row} from 'react-bootstrap';
import ReactFC from '../Main/Grafico/Grafico';
//import ToggleButton from 'react-bootstrap';


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
    columnStyle: {
        margin: '20px',
        display: 'block',
        width: '95%',

    },
};

const homeComponent = ({classes}) => (
    <div className={classes.Home}>
        <header className={classes.HomeHeader}>
            <Grid className='container-fluid'>{/*<ReactFC/>*/}
                <Row className='container-fluid'>
                    <Col className={classes.columnStyle} xs={6} sm={6} md={6} lg={6}>
                        <div style={{
                            border: 'solid 3px',
                            borderColor: '#ff2627',
                            width: '55%',
                            height: '750px',
                            float: 'left'
                        }}>
                            <img src={logo} className={classes.HomeLogo} alt="logo"/>
                            <Button>aaaa</Button>
                        </div>
                    </Col>
                    <Col className={classes.columnStyle} xs={6} sm={6} md={6} lg={6}>
                        <div style={{
                            border: 'solid 3px',
                            borderColor: '#ff2627',
                            width: '40%',
                            height: '750px',
                            float: 'right'
                        }}>
                            <ReactFC/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </header>


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
