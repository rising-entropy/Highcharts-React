import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {data2} from '../data'
import wordCloud from "highcharts/modules/wordcloud.js";

wordCloud(Highcharts);
Highcharts.seriesTypes.wordcloud.prototype.deriveFontSize = function (relativeWeight) {
    var maxFontSize = 25;
    // Will return a fontSize between 0px and 25px.
    return Math.floor(maxFontSize * relativeWeight); 
};

const text =data2,
  lines = text.split(/[,\. ]+/g),
  data = Highcharts.reduce(
    lines,
    function(arr, word) {
      var obj = Highcharts.find(arr, function(obj) {
        return obj.name === word;
      });
      if (obj) {
        obj.weight += 1;
      } else {
        obj = {
          name: word,
          weight: Math.ceil(Math.random() * 50)
        };
        arr.push(obj);
      }
      return arr;
    },
    []
  );

export default class WordCloudBasic extends Component {

    options = {
        chart: {
            plotBackgroundColor: "#F9F3F3",
        },
        series: [
          {
            type: "wordcloud",
            data: data
          }
        ],
        title: {
            text: 'Wordcloud of a short story'
          }
      };

    render() {
        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={this.options} /> 
            </div>
        )
    }
}