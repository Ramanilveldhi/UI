import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowentitlementComponent } from './showentitlement.component';

describe('ShowentitlementComponent', () => {
  let component: ShowentitlementComponent;
  let fixture: ComponentFixture<ShowentitlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowentitlementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowentitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
