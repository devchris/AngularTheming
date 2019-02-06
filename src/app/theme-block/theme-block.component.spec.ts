import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBlockComponent } from './theme-block.component';

describe('ThemeBlockComponent', () => {
  let component: ThemeBlockComponent;
  let fixture: ComponentFixture<ThemeBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
