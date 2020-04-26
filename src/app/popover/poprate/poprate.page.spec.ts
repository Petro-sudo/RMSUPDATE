import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopratePage } from './poprate.page';

describe('PopratePage', () => {
  let component: PopratePage;
  let fixture: ComponentFixture<PopratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopratePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
