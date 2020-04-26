import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditpropPage } from './editprop.page';

describe('EditpropPage', () => {
  let component: EditpropPage;
  let fixture: ComponentFixture<EditpropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
