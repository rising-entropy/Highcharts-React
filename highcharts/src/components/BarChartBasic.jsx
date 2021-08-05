import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class BarChartBasic extends Component {

    options = {
        chart: {
            plotBackgroundColor: "#FFF9B0",
          type: 'bar'
        },
        title: {
          text: 'Netflix Subscriber Count'
        },
        // subtitle: {
        //   text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        // },
        xAxis: {
          categories: ['United States and Canada', 'Europe,  Middle East and Africa', 'Latin America', 'Asia-Pacific'],
          title: {
            text: 'Region'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Subscribers',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
          shadow: true
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Q1',
          data: [66633000, 42542000, 27547000, 12141000]
        }, {
          name: 'Q2',
          data: [66501000, 44229000, 27890000, 12942000]
        }, {
          name: 'Q3',
          data: [67114000, 47355000, 29380000, 14485000]
        }, {
          name: 'Q4',
          data: [67662000, 51778000, 31417000, 16233000]
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