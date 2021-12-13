import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMarketListComponent } from './show-market-list.component';
import {SharedService} from 'src/app/shared.service';

describe('ShowMarketListComponent', () => {
  let component: ShowMarketListComponent;
  let fixture: ComponentFixture<ShowMarketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMarketListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMarketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
