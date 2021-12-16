import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtechnologyComponent } from './showtechnology.component';

describe('ShowtechnologyComponent', () => {
  let component: ShowtechnologyComponent;
  let fixture: ComponentFixture<ShowtechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
