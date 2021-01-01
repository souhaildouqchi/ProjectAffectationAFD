import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConsComponent } from './show-cons.component';

describe('ShowConsComponent', () => {
  let component: ShowConsComponent;
  let fixture: ComponentFixture<ShowConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowConsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
