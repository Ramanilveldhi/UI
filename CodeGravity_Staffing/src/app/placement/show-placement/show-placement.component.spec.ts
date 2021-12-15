import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlacementComponent } from './show-placement.component';

describe('ShowPlacementComponent', () => {
  let component: ShowPlacementComponent;
  let fixture: ComponentFixture<ShowPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPlacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
