import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopconPage } from './popcon.page';

describe('PopconPage', () => {
  let component: PopconPage;
  let fixture: ComponentFixture<PopconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
