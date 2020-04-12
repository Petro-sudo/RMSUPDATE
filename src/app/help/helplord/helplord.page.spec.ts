import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelplordPage } from './helplord.page';

describe('HelplordPage', () => {
  let component: HelplordPage;
  let fixture: ComponentFixture<HelplordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelplordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
