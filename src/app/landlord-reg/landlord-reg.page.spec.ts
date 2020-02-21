import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandlordRegPage } from './landlord-reg.page';

describe('LandlordRegPage', () => {
  let component: LandlordRegPage;
  let fixture: ComponentFixture<LandlordRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordRegPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandlordRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

