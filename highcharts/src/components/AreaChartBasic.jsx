import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import HC_patternFill from "highcharts-pattern-fill";
import * as patternFill from "highcharts/modules/pattern-fill";

patternFill(Highcharts);

export default class AreaChartBasic extends Component {

    options={
        chart: {
          plotBackgroundColor: "#F9F9F9",
          type: 'area'
        },
        accessibility: {
          description: 'Netflix Subscriber Numbers'
        },
        title: {
          text: 'Netflix Subscriber Numbers - 2019'
        },
        // subtitle: {
        //   text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
        //     'thebulletin.org</a> & <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
        //     'armscontrol.org</a>'
        // },
        xAxis: {
          allowDecimals: false,
          labels: {
            formatter: function () {
              return this.value; // clean, unformatted number for year
            }
          },
          categories: ['Q1', 'Q2', 'Q3', 'Q4']
        //   accessibility: {
        //     rangeDescription: 'Range: 1940 to 2017.'
        //   }
        },
        yAxis: {
          title: {
            text: 'Nuclear weapon states'
          },
        //   labels: {
        //     formatter: function () {
        //       return this.value / 1000 + 'k';
        //     }
        //   },
          min: 10000000,
          max: 100000000
        },
        tooltip: {
          pointFormat: '{series.name} had <b>{point.y:,.0f}</b><br/>subscribers in Quarter {point.x}'
        },
        plotOptions: {
          area: {
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [{
          name: 'United States and Canada',
          data: [
            66633000, 66501000, 67114000, 67662000
          ]
        },{
          name: 'Europe,  Middle East and Africa',
          data: [
            42542000, 44229000, 47355000, 51778000
          ]
        },{
            name: 'Latin America',
            data: [
                27547000, 27890000, 29380000, 31417000
            ]
        },{
            name: 'Asia-Pacific',
            data: [
                12141000, 12942000, 14485000, 16233000
            ]
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
