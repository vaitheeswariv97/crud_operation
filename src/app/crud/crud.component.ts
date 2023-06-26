import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  constructor(private api: ApiService) {}
  emp_details!: FormGroup;

  ngOnInit(): void {
    this.emp_details = new FormGroup({
      emp_id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      age: new FormControl(null),
      gender: new FormControl(null),
      mobile_no: new FormControl(null),
    });
  }

  submitD() {
    if (this.emp_details.valid) {
      let emp_det: any = {};
      emp_det = this.emp_details.getRawValue();
      console.log(emp_det);
      this.api.post('crud/add', emp_det).subscribe((data: any) => {
        console.log(data);
      });
    }
  }
}
