import { Component, OnInit } from '@angular/core';
import { ChartType, ChartEvent, ChartData, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent implements OnInit {

   // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 90 ],
        backgroundColor: [
        '#08FAC8',
        '#06A4F5',
        '#075DDE',
        '#03FA89'
      ] },
      
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

   // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }



  

  constructor() { }

  ngOnInit(): void {
  }

}
