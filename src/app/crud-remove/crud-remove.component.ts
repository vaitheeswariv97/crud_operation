import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-crud-remove',
  templateUrl: './crud-remove.component.html',
  styleUrls: ['./crud-remove.component.css'],
})
export class CrudRemoveComponent implements OnInit {
  constructor(private api: ApiService) {}
  emp_id!: FormGroup;
  ngOnInit(): void {
    this.emp_id = new FormGroup({
      id: new FormControl(null, Validators.required),
    });
  }

  submitR() {
    if (this.emp_id.valid) {
      let id = this.emp_id.get('id')?.value;
      console.log(id);
      this.api.delete('crud/remove/' + id).subscribe((data: any) => {
        console.log(data);
      });
    }
  }
}
