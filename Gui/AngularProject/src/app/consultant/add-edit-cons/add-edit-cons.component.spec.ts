import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditConsComponent } from './add-edit-cons.component';

describe('AddEditConsComponent', () => {
  let component: AddEditConsComponent;
  let fixture: ComponentFixture<AddEditConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditConsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
