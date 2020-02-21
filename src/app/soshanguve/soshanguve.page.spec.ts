import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoshanguvePage } from './soshanguve.page';

describe('SoshanguvePage', () => {
  let component: SoshanguvePage;
  let fixture: ComponentFixture<SoshanguvePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoshanguvePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoshanguvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
