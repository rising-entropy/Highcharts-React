import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highcharts3d from "highcharts/highcharts-3d";
import cylinder from "highcharts/modules/cylinder";

highcharts3d(Highcharts);
cylinder(Highcharts);

export default class ThreeDCylinderBasic extends Component {

    options = {
        chart: {
          plotBackgroundColor: "#E4EFE7",
          type: 'cylinder',
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          }
        },
        title: {
          text: 'Netflix Quarter by Quarter Subscribers'
        },
        plotOptions: {
          series: {
            depth: 25,
            colorByPoint: true
          }
        },
        yAxis: {
            title: {
              text: 'Subscriber Count'
            },
            min: 40000000,
            max: 70000000
          },
        xAxis: {
            min: 1
        },
        series: [{
          data: [60909000, 61870000, 63010000, 64757000, 66633000, 66501000, 67114000, 67662000],
          name: 'Cylinders',
          showInLegend: false
        }]
      }


    render() {
        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={this.options} /> 
            </div>
        )
    }
}
