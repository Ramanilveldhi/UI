import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMarketComponent } from './add-edit-market.component';

describe('AddEditMarketComponent', () => {
  let component: AddEditMarketComponent;
  let fixture: ComponentFixture<AddEditMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
