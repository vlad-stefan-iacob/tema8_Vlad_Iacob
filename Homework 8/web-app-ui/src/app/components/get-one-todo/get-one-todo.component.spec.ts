import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneTodoComponent } from './get-one-todo.component';

describe('GetOneTodoComponent', () => {
  let component: GetOneTodoComponent;
  let fixture: ComponentFixture<GetOneTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetOneTodoComponent]
    });
    fixture = TestBed.createComponent(GetOneTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
