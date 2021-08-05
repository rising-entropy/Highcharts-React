import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class PieChartBasic extends Component {

    options = {
        chart: {
          plotBackgroundColor: "#FAF3F3",
          plotBorderWidth: null,
          plotShadow: "5px",
          type: 'pie'
        },
        title: {
          text: 'Netflix Subscriber Base in 2019 Q1'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          name: 'Subscribers',
          colorByPoint: true,
          data: [{
            name: 'United States and Canada',
            y: 66633000,
            // sliced: true,
            // selected: true
          }, {
            name: 'Europe,  Middle East and Africa',
            y: 42542000
          }, {
            name: 'Latin America',
            y: 27547000
          }, {
            name: 'Asia-Pacific',
            y: 12141000
          }]
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
