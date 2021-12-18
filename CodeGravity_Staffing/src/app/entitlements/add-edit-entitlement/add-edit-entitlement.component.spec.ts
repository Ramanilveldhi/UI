import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEntitlementComponent } from './add-edit-entitlement.component';

describe('AddEditEntitlementComponent', () => {
  let component: AddEditEntitlementComponent;
  let fixture: ComponentFixture<AddEditEntitlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEntitlementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEntitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
