import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditProfPage } from './edit-prof.page';

describe('EditProfPage', () => {
  let component: EditProfPage;
  let fixture: ComponentFixture<EditProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
