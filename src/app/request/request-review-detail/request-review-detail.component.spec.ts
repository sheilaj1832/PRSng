import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReviewDetailComponent } from './request-review-detail.component';

describe('RequestReviewDetailComponent', () => {
  let component: RequestReviewDetailComponent;
  let fixture: ComponentFixture<RequestReviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestReviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
