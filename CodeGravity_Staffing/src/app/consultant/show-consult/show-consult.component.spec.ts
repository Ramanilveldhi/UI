import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConsultComponent } from './show-consult.component';

describe('ShowConsultComponent', () => {
  let component: ShowConsultComponent;
  let fixture: ComponentFixture<ShowConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
