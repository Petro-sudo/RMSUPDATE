import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopreportPage } from './popreport.page';

describe('PopreportPage', () => {
  let component: PopreportPage;
  let fixture: ComponentFixture<PopreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
