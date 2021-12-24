import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditIncentiveComponent } from './add-edit-incentive.component';

describe('AddEditIncentiveComponent', () => {
  let component: AddEditIncentiveComponent;
  let fixture: ComponentFixture<AddEditIncentiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditIncentiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditIncentiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
