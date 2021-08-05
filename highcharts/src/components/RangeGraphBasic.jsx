import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMore from 'highcharts/highcharts-more'; 

highchartsMore(Highcharts);

export default class RangeGraphBasic extends Component {

    data = [
        [1, 66633000, 12141000],
        [2, 66501000, 12942000],
        [3, 67114000, 14485000],
        [4, 67662000, 16233000]
    ]

    options = {

        chart: {
        plotBackgroundColor: "#FFF5EB",
          type: 'arearange',
          zoomType: 'x',
          scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
          }
        },
  
        title: {
          text: 'Netflix Subscriber Regional Variation in 2019'
        },
  
        // xAxis: {
        //   type: 'datetime',
        //   accessibility: {
        //     rangeDescription: 'Range: Jan 1st 2017 to Dec 31 2017.'
        //   }
        // },
  
        yAxis: {
          title: {
            text: null
          }
        },
  
        tooltip: {
          crosshairs: true,
          shared: true,
        //   valueSuffix: '°C',
          xDateFormat: '%A, %b %e'
        },
  
        legend: {
          enabled: false
        },
  
        series: [{
          name: 'Subscribers',
          data: this.data
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