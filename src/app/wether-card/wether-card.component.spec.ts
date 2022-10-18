import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetherCardComponent } from './wether-card.component';

describe('WetherCardComponent', () => {
  let component: WetherCardComponent;
  let fixture: ComponentFixture<WetherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WetherCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WetherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
