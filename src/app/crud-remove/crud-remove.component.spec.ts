import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRemoveComponent } from './crud-remove.component';

describe('CrudRemoveComponent', () => {
  let component: CrudRemoveComponent;
  let fixture: ComponentFixture<CrudRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
