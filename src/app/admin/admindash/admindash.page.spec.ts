import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmindashPage } from './admindash.page';

describe('AdmindashPage', () => {
  let component: AdmindashPage;
  let fixture: ComponentFixture<AdmindashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmindashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
