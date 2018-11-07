import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitForReviewComponent } from './submit-for-review.component';

describe('SubmitForReviewComponent', () => {
  let component: SubmitForReviewComponent;
  let fixture: ComponentFixture<SubmitForReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitForReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
