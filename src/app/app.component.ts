import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  public chartType:string = 'bar';

  public chartDatasets:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
  ];

  public chartLabels:Array<any> = ['Jobs', 'Positions', 'Open Positions', 'closed Positions'];
  public chartOptions = {
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(0, 0, 0, 0)'
        }, angleLines: {
          display: false
        }, ticks: {
          beginAtZero: true
        }

      }],
      yAxes: [{

        gridLines: {
          color: 'rgba(0, 0, 0, 0)'
        },
        angleLines: {
          display: false
        }, ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false,

      labels: {
        fontColor: 'rgb(255, 99, 132)'
      }
    },
    title: {
      display: true,
      text: 'Custom Chart Title'
    }

    // Chart.js options can go here.
  };

  public chartColors:Array<any> = [
    {
      backgroundColor: 'rgba(77,144,254,0.3)',
      borderColor: 'rgba(77,144,254,0.3)',
      borderWidth: 0,
      pointBackgroundColor: 'rgba(220,220,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)'
    },
    {
      backgroundColor: 'rgba(77,144,254,0.9)',
      borderColor: 'rgba(151,187,205,1)',
      borderWidth: 0,
      pointBackgroundColor: 'rgba(151,187,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    }
  ];




  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
