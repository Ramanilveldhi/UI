import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsubmissionsComponent } from './showsubmissions.component';

describe('ShowsubmissionsComponent', () => {
  let component: ShowsubmissionsComponent;
  let fixture: ComponentFixture<ShowsubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
