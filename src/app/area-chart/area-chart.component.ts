import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts = Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={

      chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Online vs In-Store Purchases(2003-2023)',
        
    },
    
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 120,
        y: 70,
        floating: true,
        borderWidth: 1
       
    },
    xAxis: {
        plotBands: [{ // Highlight the two last years
            from: 2003,
            to: 2023,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    tooltip: {
        shared: true
        
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            pointStart: 2003
        },
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Online',
        data:
            [
                38000,
                37300,
                37892,
                38564,
                36770,
                36026,
                34978,
                35657,
                35620,
                35971,
                36409,
                36435,
                34643,
                34956,
                33199,
                31136,
                30835,
                31611,
                30666,
                30319,
                31766
            ]
    }, {
        name: 'Instore',
        data:
            [
                22534,
                23599,
                24533,
                25195,
                25896,
                27635,
                29173,
                32646,
                35686,
                37709,
                39143,
                36829,
                35031,
                36202,
                35140,
                33718,
                37773,
                42556,
                43820,
                46445,
                50048
            ]
    }]
      
    }
    HC_exporting(Highcharts);
  }
}
