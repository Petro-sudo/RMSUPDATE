import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditlordprofPage } from './editlordprof.page';

describe('EditlordprofPage', () => {
  let component: EditlordprofPage;
  let fixture: ComponentFixture<EditlordprofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlordprofPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditlordprofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
