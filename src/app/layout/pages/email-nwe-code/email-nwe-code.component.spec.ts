import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNweCodeComponent } from './email-nwe-code.component';

describe('EmailNweCodeComponent', () => {
  let component: EmailNweCodeComponent;
  let fixture: ComponentFixture<EmailNweCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailNweCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailNweCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
