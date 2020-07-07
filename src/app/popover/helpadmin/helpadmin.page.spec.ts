import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpadminPage } from './helpadmin.page';

describe('HelpadminPage', () => {
  let component: HelpadminPage;
  let fixture: ComponentFixture<HelpadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
