import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansDevicesNetworksComponent } from './plans-devices-networks.component';

describe('PlansDevicesNetworksComponent', () => {
  let component: PlansDevicesNetworksComponent;
  let fixture: ComponentFixture<PlansDevicesNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansDevicesNetworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansDevicesNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
