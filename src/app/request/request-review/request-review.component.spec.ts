import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReviewComponent } from './request-review.component';

describe('RequestReviewListComponent', () => {
  let component: RequestReviewComponent;
  let fixture: ComponentFixture<RequestReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
