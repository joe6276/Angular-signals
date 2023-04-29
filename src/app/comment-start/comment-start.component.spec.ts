import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentStartComponent } from './comment-start.component';

describe('CommentStartComponent', () => {
  let component: CommentStartComponent;
  let fixture: ComponentFixture<CommentStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CommentStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
