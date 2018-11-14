import React from "react";

import Chart from "react-google-charts";

const options = {
    width: 1000,
    height: 400,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5
};

const getRandomNumber = () => {
    return Math.random() * 100;
};

class Grafico extends React.Component {
    state = {
        watt: 55
    };
    intervalID = null;
    getData = () => {
        return [
            ["Label", "Value"],
            ["Watt", this.state.watt],
        ];
    };
    componentWillUnmount() {
        if (this.intervalID === null) return;
        clearInterval(this.intervalID);
    }
    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState(state => {
                return {
                    ...state,
                    watt: getRandomNumber(),

                };
            });
        }, 500);
    }
    render() {
        // console.log(this.getData());
        return (
            <div className="App">
                <Chart
                    chartType="Gauge"
                    width="100%"
                    height="400px"
                    data={this.getData()}
                    options={options}
                    style={{
                        marginLeft:'35px',
                        marginTop:'100px',

                    }}
                />
            </div>
        );
    }
}


export default Grafico;