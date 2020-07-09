import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandlordappsPage } from './landlordapps.page';

describe('LandlordappsPage', () => {
  let component: LandlordappsPage;
  let fixture: ComponentFixture<LandlordappsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordappsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandlordappsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
