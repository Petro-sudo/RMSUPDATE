import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagestudentPage } from './managestudent.page';

describe('ManagestudentPage', () => {
  let component: ManagestudentPage;
  let fixture: ComponentFixture<ManagestudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagestudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagestudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
