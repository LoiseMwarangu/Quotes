import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownvoteButtonComponent } from './downvote-button.component';

describe('DownvoteButtonComponent', () => {
  let component: DownvoteButtonComponent;
  let fixture: ComponentFixture<DownvoteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownvoteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownvoteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
