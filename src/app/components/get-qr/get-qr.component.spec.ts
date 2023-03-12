import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQrComponent } from './get-qr.component';

describe('GetQrComponent', () => {
  let component: GetQrComponent;
  let fixture: ComponentFixture<GetQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetQrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
