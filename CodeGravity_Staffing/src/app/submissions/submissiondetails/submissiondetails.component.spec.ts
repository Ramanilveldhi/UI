import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissiondetailsComponent } from './submissiondetails.component';

describe('SubmissiondetailsComponent', () => {
  let component: SubmissiondetailsComponent;
  let fixture: ComponentFixture<SubmissiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
