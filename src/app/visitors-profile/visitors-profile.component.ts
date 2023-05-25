import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-visitors-profile',
  templateUrl: './visitors-profile.component.html',
  styleUrls: ['./visitors-profile.component.css']
})
export class VisitorsProfileComponent {

  Highcharts = Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
        title: {
          text: '<h2 class="profile">Visitors Profile</h2>',
          align: 'center',
          verticalAlign: '',
          y:10
        },
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        credits: {
          enabled: false
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
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
          }
        },
        series: [{
          type: 'pie',
          name: '',
          innerSize: '50%',
          data: [
            ['Male', 50],
            ['Female', 50]
          ]
        }]
    
    }
    HC_exporting(Highcharts);
  }

}
