import React, {Component} from 'react';
import logo from '../logo.svg';
import Button from '../Main/Buttons/Button';
import injectSheet from 'react-jss';
import {Grid, Col, Row} from 'react-bootstrap';


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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },

    containerFluid: {
        display: "inline-block",
    },

    gridItem: {
        display: "inline",
    }
};

const homeComponent = ({classes}) => (
    <div className={classes.Home}>
        <header className={classes.HomeHeader}>
            <Grid className={classes.containerFluid}>
                <Row>
                <Col className={classes.gridItem} xs={6} sm={6} md={6} lg={6}>
                    <Button/>
                </Col>
                <Col className={classes.gridItem} xs={6} sm={6} md={6} lg={6}>
                    <Button/>
                </Col>
                </Row>
            </Grid>

            <img src={logo} className={classes.HomeLogo} alt="logo"/>
            <p>
                angelo sei bello
                <Button/>
            </p>
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
