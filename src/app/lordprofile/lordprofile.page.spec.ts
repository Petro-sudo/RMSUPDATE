import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LordprofilePage } from './lordprofile.page';

describe('LordprofilePage', () => {
  let component: LordprofilePage;
  let fixture: ComponentFixture<LordprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LordprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LordprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
