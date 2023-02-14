import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-pagination1',
  templateUrl: './pagination1.component.html',
  styleUrls: ['./pagination1.component.scss'],
})
export class Pagination1Component implements OnInit {
  Data: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 15;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.Data = this.dataService.CarsData;
    console.log("data", this.Data);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getData();
  }

}
