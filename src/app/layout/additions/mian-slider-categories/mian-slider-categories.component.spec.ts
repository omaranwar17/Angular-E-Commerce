import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MianSliderCategoriesComponent } from './mian-slider-categories.component';

describe('MianSliderCategoriesComponent', () => {
  let component: MianSliderCategoriesComponent;
  let fixture: ComponentFixture<MianSliderCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MianSliderCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MianSliderCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
