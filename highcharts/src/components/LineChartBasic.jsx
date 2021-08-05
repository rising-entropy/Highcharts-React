import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class LineChartBasic extends Component {

    options = {
        chart: {
            plotBackgroundColor: "#FDF6F0",
            plotBorderWidth: null
          },
        title: {
          text: 'Netflix Subscriber Count Year 2019 (United States and Canada)'
        },
        series: [{
          data: [
            {
              name: 'Q1 - 2019',
              y: 66633000
            },
            {
              name: 'Q2 - 2019',
              y: 66501000
            }
            ,
            {
              name: 'Q3 - 2019',
              y: 67114000
            },
            {
              name: 'Q4 - 2019',
              y: 67662000
            }
          ]
        }]
      }


    render() {
        return (
            <HighchartsReact highcharts={Highcharts} options={this.options} /> 
        )
    }
}
