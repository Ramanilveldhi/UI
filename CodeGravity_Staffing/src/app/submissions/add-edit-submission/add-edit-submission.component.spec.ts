import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSubmissionComponent } from './add-edit-submission.component';

describe('AddEditSubmissionComponent', () => {
  let component: AddEditSubmissionComponent;
  let fixture: ComponentFixture<AddEditSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
