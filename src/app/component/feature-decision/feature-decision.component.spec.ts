import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDecisionComponent } from './feature-decision.component';

describe('FeatureDecisionComponent', () => {
  let component: FeatureDecisionComponent;
  let fixture: ComponentFixture<FeatureDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDecisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
