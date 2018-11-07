import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import React, {Component} from 'react';

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
    "chart": {
        "caption": "Tensione",
        "subcaption": "In watt",
        "numbersuffix": "W",
        "theme": "fusion"
    },
    "data": [
        {
            "value": "40"
        },
    ]
};

class Grafico extends Component {
    render() {
        return (
            <ReactFC
                type = "Bar3D"
                width = '100%'
                height = '26.5%'
                dataFormat = "JSON"
                dataSource = {dataSource}
                />
        );
    }
}
export default Grafico;