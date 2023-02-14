# NgxPagination-in-angular
NgxPagination in angular and ionic

# Process

1 = npm install ngx-pagination 

2 = import   NgxPaginationModule   from 'ngx-pagination'; in app.module.ts 

    import { NgxPaginationModule } from 'ngx-pagination';

3 = and add ts code

# html 

     <table class="table" border="2">
          <thead class="thead">
            <tr>
              <th>SR.</th>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let post of Data | paginate : {itemsPerPage: tableSize,  currentPage: page,  totalItems: count};let i = index">
              <th scope="row">{{i+1}}</th>
              <td>{{ post.year }}</td>
              <td>{{ post.make }}</td>
              <td>{{ post.model }}</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-center">
          <pagination-controls
            previousLabel="Prev"
            nextLabel="Next"
            (pageChange)="onTableDataChange($event)">
          </pagination-controls>
        </div>
    
    
# Ts.

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
