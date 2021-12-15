import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlacementComponent } from './add-edit-placement.component';

describe('AddEditPlacementComponent', () => {
  let component: AddEditPlacementComponent;
  let fixture: ComponentFixture<AddEditPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPlacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
