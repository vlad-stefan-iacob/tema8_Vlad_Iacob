import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTodosComponent } from './get-todos.component';

describe('GetTodosComponent', () => {
  let component: GetTodosComponent;
  let fixture: ComponentFixture<GetTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTodosComponent]
    });
    fixture = TestBed.createComponent(GetTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
