import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crud-show',
  templateUrl: './crud-show.component.html',
  styleUrls: ['./crud-show.component.css'],
})
export class CrudShowComponent implements OnInit {
  constructor(private api: ApiService) {}
  emp_det: any = [];
  ngOnInit(): void {
    this.api.get('crud/show').subscribe((data: any) => {
      this.emp_det = data.data;
      console.log(this.emp_det);
    });
  }
}
