import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolokwanePage } from './polokwane.page';

describe('PolokwanePage', () => {
  let component: PolokwanePage;
  let fixture: ComponentFixture<PolokwanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolokwanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolokwanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
