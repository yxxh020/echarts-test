import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsComponent } from './echarts.component';

describe('EchartsComponent', () => {
  let component: EchartsComponent;
  let fixture: ComponentFixture<EchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EchartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
