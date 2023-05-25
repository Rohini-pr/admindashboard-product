import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {

  Highcharts = Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions ={

      // give chart configure data from highcharts
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Top Products In Revenue(k)',
    },
    credits: {
      enabled: false
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: '',
        data: [
            ['Tops', 7],
            ['Pants', 10],
            ['Sarees', 14],
            ['Shirts', 7],
            ['Lehanga', 12],
            ['Salwar', 6],
            ['Kidswear', 12],
            ['Davani', 8],
            ['Skirts', 4]

        ]
    }]

    }
  }
}
