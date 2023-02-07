import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-tool1',
  templateUrl: './tool1.component.html',
  styleUrls: ['./tool1.component.css']
})
export class Tool1Component implements OnInit{
  endDate = "04/02/2023"
  startDate = ""
  displayedColumns: string[] = ['date', 'result', 'description'];
  dataSource = [
    {
      date: "04/02/2023",
      testResult: "PASS",
      description: "Random Test"
    }
  ]
  chartOptions: ChartOptions = {
    series: [],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {}
  }

  @ViewChild("chart") chart!: ChartComponent;

  constructor() {
    let initDate = new Date()
    initDate.setDate(new Date(this.endDate).getDate() - 7)
    this.startDate = initDate.toLocaleDateString('en-GB')
  }

  ngOnInit(): void {
    this.chartOptions.series = [
      {
        name: "PASS",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      },
      {
        name: "FAIL",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ]

    this.chartOptions.xaxis = {
      categories: this.dataSource.map(v => v.date)
    }
  }
  
}
