import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SturegisterPage } from './sturegister.page';

describe('SturegisterPage', () => {
  let component: SturegisterPage;
  let fixture: ComponentFixture<SturegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SturegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SturegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
