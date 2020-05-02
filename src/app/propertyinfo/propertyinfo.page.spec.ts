import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropertyinfoPage } from './propertyinfo.page';

describe('PropertyinfoPage', () => {
  let component: PropertyinfoPage;
  let fixture: ComponentFixture<PropertyinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
