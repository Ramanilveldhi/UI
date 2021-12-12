import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditConsulComponent } from './add-edit-consul.component';

describe('AddEditConsulComponent', () => {
  let component: AddEditConsulComponent;
  let fixture: ComponentFixture<AddEditConsulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditConsulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditConsulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
