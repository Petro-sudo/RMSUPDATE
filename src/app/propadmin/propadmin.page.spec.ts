import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropadminPage } from './propadmin.page';

describe('PropadminPage', () => {
  let component: PropadminPage;
  let fixture: ComponentFixture<PropadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
