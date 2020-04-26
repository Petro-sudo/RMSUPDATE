import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopstdPage } from './popstd.page';

describe('PopstdPage', () => {
  let component: PopstdPage;
  let fixture: ComponentFixture<PopstdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopstdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopstdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
